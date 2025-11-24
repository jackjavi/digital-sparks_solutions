#!/bin/bash

# DSS Server Deployment Script
# Usage: ./deploy.sh

set -e

echo "========================================"
echo "DSS Server Deployment Script"
echo "Server IP: 161.97.71.138"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found!${NC}"
    echo "Please create .env file from .env.production template"
    exit 1
fi

# Create necessary directories
echo -e "${YELLOW}Creating necessary directories...${NC}"
mkdir -p nginx/ssl
mkdir -p nginx/webroot

# Stop existing containers
echo -e "${YELLOW}Stopping existing containers...${NC}"
docker-compose down 2>/dev/null || true

# Pull latest images
echo -e "${YELLOW}Pulling latest images...${NC}"
docker-compose pull || true

# Build and start containers
echo -e "${YELLOW}Building and starting containers...${NC}"
docker-compose up -d --build

# Wait for services to be healthy
echo -e "${YELLOW}Waiting for services to start...${NC}"
sleep 10

# Check if containers are running
if [ "$(docker ps -q -f name=dss-server)" ] && [ "$(docker ps -q -f name=dss-nginx)" ]; then
    echo -e "${GREEN}✓ Containers are running successfully!${NC}"
    echo ""
    echo "========================================"
    echo -e "${GREEN}Deployment Complete!${NC}"
    echo "========================================"
    echo ""
    echo "Your application is now accessible at:"
    echo -e "${GREEN}http://161.97.71.138${NC}"
    echo ""
    echo "To view logs:"
    echo "  docker-compose logs -f"
    echo ""
    echo "To check status:"
    echo "  docker-compose ps"
else
    echo -e "${RED}✗ Error: Containers failed to start${NC}"
    echo "Check logs with: docker-compose logs"
    exit 1
fi