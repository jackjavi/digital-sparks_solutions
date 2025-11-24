# DSS Server - Docker Setup

This guide explains how to run the dss-server application using Docker and Docker Compose with nginx as a reverse proxy.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)
- Git (optional, for version control)
- Server with IP: 161.97.71.138

### Installation Links

- **Docker Desktop** (includes Docker Compose): [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- For Linux: Install Docker Engine and Docker Compose separately [DOCKER INSTALLATION GUIDE](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

## Deployment Modes

This setup supports two deployment modes:

1. **Local Development** (`docker-compose-local.yml`) - For development on localhost
2. **Production** (`docker-compose.yml`) - For production deployment on 161.97.71.138

## Project Structure

```
dss-server/
├── src/                          # Source code
│   └── app.ts                    # Main application file
├── nginx/
│   ├── nginx.conf                # Nginx config for local development
│   ├── nginx.prod.conf           # Nginx config for production
│   ├── ssl/                      # SSL certificates directory
│   └── webroot/                  # For Let's Encrypt challenges
├── .dockerignore                 # Docker ignore file
├── .env                          # Environment variables (create from template)
├── .env.example                  # Example for local development
├── .env.production               # Template for production
├── Dockerfile                    # Docker image for development
├── Dockerfile.production         # Optimized Docker image for production
├── docker-compose-local.yml      # Local development configuration
├── docker-compose.yml            # Production configuration
├── deploy.sh                     # Production deployment script
├── setup-ssl.sh                  # SSL certificate setup script
├── package.json                  # Node.js dependencies
└── README.md                     # This file
```

---

## Local Development Setup

### Quick Start (Development)

```bash
# 1. Create nginx directory
mkdir -p nginx

# 2. Create your .env file
cp .env.example .env
# Edit .env with your configuration

# 3. Build and start
docker-compose -f docker-compose-local.yml up --build

# Access at: http://localhost
```

---

## Production Deployment (IP: 161.97.71.138)

---

## Production Deployment (IP: 161.97.71.138)

### Initial Server Setup

1. **SSH into your server:**

```bash
ssh root@161.97.71.138
# or
ssh your-user@161.97.71.138
```

2. **Install Docker and Docker Compose:**

```bash
# Update package list
sudo apt update

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

3. **Clone your repository:**

```bash
cd /opt
git clone <your-repo-url> dss-server
cd dss-server
```

### Configure Production Environment

1. **Create production .env file:**

```bash
cp .env.production .env
nano .env
```

Update these values in your `.env`:

- `MONGODB_URI` - Your MongoDB connection string
- `EMAIL_USER` and `EMAIL_PASSWORD` - Your email credentials
- `SESSION_SECRET` and `JWT_SECRET` - Generate secure secrets
- Other API keys and secrets

2. **Generate secure secrets:**

```bash
# Generate random secrets
openssl rand -base64 32
```

3. **Make deployment script executable:**

```bash
chmod +x deploy.sh
chmod +x setup-ssl.sh
```

### Deploy Application

**Option 1: Using deployment script (Recommended)**

```bash
./deploy.sh
```

**Option 2: Manual deployment**

```bash
# Create necessary directories
mkdir -p nginx/ssl nginx/webroot

# Start the application
docker-compose up -d --build

# Check logs
docker-compose logs -f
```

### Access Your Application

After deployment, your application will be accessible at:

- **HTTP**: `http://161.97.71.138`

### Verify Deployment

```bash
# Check running containers
docker-compose ps

# View logs
docker-compose logs -f dss-server
docker-compose logs -f nginx

# Test the application
curl http://161.97.71.138
```

---

## SSL Certificate Setup (After Domain Configuration)

Once you have a domain name pointing to 161.97.71.138:

### Prerequisites

1. Domain DNS A record pointing to 161.97.71.138
2. Port 80 and 443 open on your server firewall

### Setup SSL Certificate

**Option 1: Using setup script (Recommended)**

```bash
./setup-ssl.sh your-domain.com your-email@example.com
```

**Option 2: Manual setup**

1. **Update docker-compose.yml:**

```bash
nano docker-compose.yml
# Replace 'your-domain.com' with your actual domain
# Replace 'your-email@example.com' with your email
```

2. **Update nginx configuration:**

```bash
nano nginx/nginx.prod.conf
# Replace 'your-domain.com' with your actual domain
# Uncomment the HTTPS server block (lines starting with #)
```

3. **Obtain SSL certificate:**

```bash
docker-compose run --rm certbot certonly --webroot \
    --webroot-path=/var/www/html \
    --email your-email@example.com \
    --agree-tos \
    --no-eff-email \
    -d your-domain.com
```

4. **Restart nginx:**

```bash
docker-compose restart nginx
```

### SSL Certificate Auto-Renewal

The certificate will auto-renew. To manually renew:

```bash
docker-compose run --rm certbot renew
docker-compose restart nginx
```

Add a cron job for automatic renewal:

```bash
# Edit crontab
crontab -e

# Add this line (runs twice daily at 2:15 AM and PM)
15 2,14 * * * cd /opt/dss-server && docker-compose run --rm certbot renew && docker-compose restart nginx
```

---

## Docker Commands

### Production Commands

```bash
# Start application
docker-compose up -d

# Stop application
docker-compose down

# View logs
docker-compose logs -f
docker-compose logs -f dss-server
docker-compose logs -f nginx

# Restart services
docker-compose restart

# Rebuild and restart
docker-compose up -d --build

# Check status
docker-compose ps

# Execute commands in container
docker-compose exec dss-server sh

# Remove everything (including volumes)
docker-compose down -v
```

### Local Development Commands

### Local Development Commands

```bash
# Start containers
docker-compose -f docker-compose-local.yml up -d

# Stop containers
docker-compose -f docker-compose-local.yml down

# View logs
docker-compose -f docker-compose-local.yml logs -f

# Rebuild
docker-compose -f docker-compose-local.yml up -d --build
```

---

## Firewall Configuration

Make sure these ports are open on your server:

```bash
# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Allow SSH (if using UFW)
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## Monitoring and Maintenance

### View Application Logs

```bash
# Real-time logs
docker-compose logs -f

# Last 100 lines
docker-compose logs --tail=100

# Specific service
docker-compose logs -f dss-server
```

### Check Container Health

```bash
# Container status
docker-compose ps

# Detailed container info
docker inspect dss-server

# Container resource usage
docker stats
```

### Backup Data

```bash
# Backup environment file
cp .env .env.backup

# Backup volumes (if using Docker volumes for database)
docker run --rm \
  -v dss-server_certbot-etc:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/certbot-backup.tar.gz /data
```

### Update Application

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up -d --build

# Or use the deploy script
./deploy.sh
```

---

### Making Code Changes

The docker-compose configuration includes volume mounts for the `src/` directory. Changes to your source code will be reflected if you're using a file watcher (like `ts-node-dev`).

To use hot-reloading in development, update your `package.json` start script or create a dev script:

```json
"scripts": {
  "start": "ts-node-dev --respawn src/app.ts"
}
```

Then rebuild:

```bash
docker-compose -f docker-compose-local.yml up -d --build
```

### Installing New Dependencies

When you add new packages to `package.json`:

```bash
docker-compose -f docker-compose-local.yml down
docker-compose -f docker-compose-local.yml up -d --build
```

## Troubleshooting

### Application Won't Start

1. **Check logs:**

```bash
docker-compose logs dss-server
```

2. **Check if port is in use:**

```bash
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443
```

3. **Restart services:**

```bash
docker-compose restart
```

### Cannot Access via IP Address

1. **Verify containers are running:**

```bash
docker-compose ps
```

2. **Check firewall:**

```bash
sudo ufw status
```

3. **Test nginx:**

```bash
docker-compose exec nginx nginx -t
```

4. **Check nginx logs:**

```bash
docker-compose logs nginx
```

### SSL Certificate Issues

1. **Verify domain DNS:**

```bash
nslookup your-domain.com
dig your-domain.com
```

2. **Check certbot logs:**

```bash
docker-compose logs certbot
```

3. **Manually test certificate:**

```bash
curl -I https://your-domain.com
```

### Database Connection Issues

### Database Connection Issues

If using MongoDB:

- Ensure MongoDB is accessible
- Check `MONGODB_URI` in `.env`
- If MongoDB is on the same server but outside Docker:
  ```
  MONGODB_URI=mongodb://host.docker.internal:27017/dss_database
  ```

### Complete Reset

If everything fails, perform a complete reset:

```bash
# Stop and remove everything
docker-compose down -v

# Remove Docker images
docker system prune -a

# Rebuild from scratch
docker-compose up -d --build
```

---

## Security Best Practices

1. **Environment Variables**: Never commit `.env` to version control
2. **Strong Secrets**: Use strong random secrets for SESSION_SECRET and JWT_SECRET
3. **Firewall**: Only open necessary ports (80, 443, 22)
4. **Regular Updates**: Keep Docker images and dependencies updated
5. **Monitoring**: Set up log monitoring and alerts
6. **Backups**: Regularly backup your data and configuration
7. **SSL**: Always use HTTPS in production
8. **User Permissions**: Run containers as non-root user (already configured)

---

## Performance Optimization

### For Production

1. **Enable Gzip Compression**: Already configured in `nginx.prod.conf`
2. **Adjust Worker Processes**: Edit nginx config based on CPU cores
3. **Database Indexing**: Ensure proper MongoDB indexes
4. **Caching**: Implement Redis for session/data caching if needed
5. **Rate Limiting**: Already configured in nginx (10 req/s)

### Scaling Considerations

To scale horizontally:

```yaml
# In docker-compose.yml
dss-server:
  deploy:
    replicas: 3
```

---

## Quick Reference

### Important URLs

- **Production (IP)**: http://161.97.71.138
- **Production (Domain)**: https://your-domain.com (after SSL setup)
- **Local Development**: http://localhost

### Important Files

- `docker-compose.yml` - Production configuration
- `docker-compose-local.yml` - Local development configuration
- `nginx/nginx.prod.conf` - Production nginx config
- `nginx/nginx.conf` - Local nginx config
- `.env` - Environment variables (DO NOT commit)
- `deploy.sh` - Production deployment script
- `setup-ssl.sh` - SSL certificate setup script

### Common Commands

```bash
# Production
./deploy.sh                    # Deploy to production
docker-compose up -d           # Start services
docker-compose logs -f         # View logs
docker-compose ps              # Check status

# Local
docker-compose -f docker-compose-local.yml up -d   # Start local
docker-compose -f docker-compose-local.yml down    # Stop local

# SSL Setup
./setup-ssl.sh domain.com email@example.com  # Setup SSL
```

---

## Support and Resources

## Support and Resources

- **Docker Documentation**: https://docs.docker.com/
- **Docker Compose Documentation**: https://docs.docker.com/compose/
- **Nginx Documentation**: https://nginx.org/en/docs/
- **Let's Encrypt**: https://letsencrypt.org/
- **Certbot**: https://certbot.eff.org/

---

## License

[Your License Here]

## Contributors

[Your Team/Contributors Here]
