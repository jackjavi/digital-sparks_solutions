#!/bin/bash

# Blog domain SSL certificate setup
domains=(blog-api.elitebrainsconsulting.com www.blog-api.elitebrainsconsulting.com)
rsa_key_size=4096
data_path="./ssl-data/certbot"
email="info@digitalsparkssolutions.com"  # or your preferred email
staging=0 # Set to 1 if you're testing

echo "### Requesting Let's Encrypt certificate for blog domains: ${domains[@]} ..."

# Check if certbot data path exists
if [ ! -d "$data_path" ]; then
  echo "Error: Certbot data path not found. Run init-letsencrypt.sh first for Digital Sparks."
  exit 1
fi

# Build domain arguments
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

# Request certificate
docker compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot

echo
echo "### Reloading nginx ..."
docker compose exec nginx nginx -s reload

echo
echo "Done! Certificate should be at: /etc/letsencrypt/live/blog-api.elitebrainsconsulting.com/"