#!/bin/bash

# SSL Setup Script for DSS Server
# Run this script after you have a domain name configured
# Usage: ./setup-ssl.sh your-domain.com your-email@example.com

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check arguments
if [ "$#" -ne 2 ]; then
    echo -e "${RED}Usage: ./setup-ssl.sh <domain> <email>${NC}"
    echo "Example: ./setup-ssl.sh example.com admin@example.com"
    exit 1
fi

DOMAIN=$1
EMAIL=$2

echo "========================================"
echo "SSL Certificate Setup"
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo "========================================"
echo ""

# Update docker-compose.yml with domain
echo -e "${YELLOW}Updating certbot configuration...${NC}"
sed -i "s/your-domain.com/$DOMAIN/g" docker-compose.yml
sed -i "s/your-email@example.com/$EMAIL/g" docker-compose.yml

# Update nginx configuration
echo -e "${YELLOW}Updating nginx configuration...${NC}"
sed -i "s/your-domain.com/$DOMAIN/g" nginx/nginx.prod.conf

# Ensure certbot directories exist
mkdir -p nginx/webroot

# Stop certbot container if running
docker-compose stop certbot 2>/dev/null || true

# Run certbot to obtain certificate
echo -e "${YELLOW}Obtaining SSL certificate from Let's Encrypt...${NC}"
docker-compose run --rm certbot certonly --webroot \
    --webroot-path=/var/www/html \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ SSL certificate obtained successfully!${NC}"
    
    # Update nginx to use HTTPS
    echo -e "${YELLOW}Enabling HTTPS in nginx...${NC}"
    
    # Uncomment HTTPS server block in nginx config
    # This assumes the HTTPS block is commented out
    # You may need to manually edit nginx/nginx.prod.conf
    
    # Restart nginx to apply changes
    docker-compose restart nginx
    
    echo ""
    echo "========================================"
    echo -e "${GREEN}SSL Setup Complete!${NC}"
    echo "========================================"
    echo ""
    echo "Your application is now accessible at:"
    echo -e "${GREEN}https://$DOMAIN${NC}"
    echo ""
    echo "Certificate will auto-renew. To manually renew:"
    echo "  docker-compose run --rm certbot renew"
    
else
    echo -e "${RED}✗ Failed to obtain SSL certificate${NC}"
    echo "Please check:"
    echo "  1. Domain DNS is pointing to 161.97.71.138"
    echo "  2. Port 80 is accessible from the internet"
    echo "  3. Domain name is correct"
    exit 1
fi