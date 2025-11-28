#!/bin/bash

# Test Whop webhook with the exact payload structure you received

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Testing Whop Webhook Integration${NC}"
echo "=========================================="

# Backend API endpoint (update this to your actual backend URL)
BACKEND_URL="http://localhost:5000/api/whop/payment-succeeded"

# Next.js webhook endpoint (update this to your actual Next.js URL)
NEXTJS_URL="http://localhost:3000/whop/pay_succeeded"

# Test payload based on your actual webhook data
PAYLOAD='{
  "id": "msg_test_123456789",
  "api_version": "v1",
  "timestamp": "2025-11-28T01:17:01.245Z",
  "type": "payment.succeeded",
  "data": {
    "id": "pay_test_123456",
    "status": "paid",
    "substatus": "succeeded",
    "refundable": false,
    "retryable": false,
    "voidable": false,
    "created_at": "2025-11-28T01:16:58.952Z",
    "paid_at": "2025-11-28T01:16:58.951Z",
    "last_payment_attempt": null,
    "dispute_alerted_at": null,
    "refunded_at": null,
    "plan": {
      "id": "plan_e8Iis0RcuS09B"
    },
    "product": {
      "id": "prod_YgqYaYk98jChn",
      "title": "Test_Product",
      "route": "testproduct-d7"
    },
    "user": {
      "id": "user_jmm0DVhO3ZQIQ",
      "name": "John Doe",
      "username": "tamelast70",
      "email": "oddtwotips@gmail.com"
    },
    "membership": {
      "id": "mem_QXn9YBe2M8leJV",
      "status": "completed"
    },
    "member": {
      "id": "mber_5DqRUh2fqLvZO",
      "phone": null
    },
    "company": {
      "id": "biz_9fHMDF4LNymAIb",
      "title": "ELITE BRAINS CONSULTING",
      "route": "elite-brains-consulting"
    },
    "promo_code": null,
    "currency": null,
    "total": "0.0",
    "subtotal": "0.0",
    "usd_total": "0.0",
    "refunded_amount": "0.0",
    "auto_refunded": false,
    "amount_after_fees": "0.0",
    "card_brand": null,
    "card_last4": null,
    "billing_address": null,
    "payment_method_type": null,
    "billing_reason": "one_time",
    "failure_message": null,
    "metadata": null
  }
}'

echo ""
echo -e "${YELLOW}1. Testing Backend Endpoint Directly${NC}"
echo "Endpoint: $BACKEND_URL"
echo "--------------------------------------"

BACKEND_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$BACKEND_URL" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$BACKEND_RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$BACKEND_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✓ Backend Response: $HTTP_CODE${NC}"
    echo "Response Body:"
    echo "$RESPONSE_BODY" | jq '.' 2>/dev/null || echo "$RESPONSE_BODY"
else
    echo -e "${RED}✗ Backend Response: $HTTP_CODE${NC}"
    echo "Response Body:"
    echo "$RESPONSE_BODY"
fi

echo ""
echo -e "${YELLOW}2. Testing Next.js Webhook Endpoint${NC}"
echo "Endpoint: $NEXTJS_URL"
echo "--------------------------------------"

NEXTJS_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$NEXTJS_URL" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$NEXTJS_RESPONSE" | tail -n1)
RESPONSE_BODY=$(echo "$NEXTJS_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✓ Next.js Response: $HTTP_CODE${NC}"
    echo "Response: $RESPONSE_BODY"
else
    echo -e "${RED}✗ Next.js Response: $HTTP_CODE${NC}"
    echo "Response: $RESPONSE_BODY"
fi

echo ""
echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}Test Complete!${NC}"
echo ""
echo "Check your server logs for detailed output:"
echo "- Backend: Look for [WHOP WEBHOOK] logs"
echo "- Next.js: Look for [WHOP WEBHOOK] logs"
echo "- MongoDB: Check WhopPayment collection for new records"
