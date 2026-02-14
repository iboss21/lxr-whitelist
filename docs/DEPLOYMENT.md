# 🚀 Deployment Guide - LXR Whitelist Evaluator

## Coolify Deployment (Recommended)

### Prerequisites
- Coolify instance running
- GitHub account connected
- Domain name configured (optional)

### Step 1: Fork or Clone Repository

```bash
# Fork on GitHub or clone directly
git clone https://github.com/iboss21/lxr-whitelist.git
```

### Step 2: Create Application in Coolify

1. Log into your Coolify dashboard
2. Click **"New Application"**
3. Select **"Git Repository"**
4. Choose **GitHub** as source
5. Select your repository: `your-username/lxr-whitelist`
6. Select branch: `main` (or your deployment branch)

### Step 3: Configure Application

Coolify will auto-detect the `Dockerfile`. No additional configuration needed!

**Optional Settings:**
- **Domain:** Set custom domain (e.g., `whitelist.wolves.land`)
- **Port:** Leave as default (80)
- **Environment:** No environment variables needed

### Step 4: Deploy

1. Click **"Deploy"**
2. Coolify will:
   - Pull repository
   - Build Docker image
   - Start container
   - Configure reverse proxy
   - Enable SSL (if domain configured)

### Step 5: Verify Deployment

Visit your deployment URL and test:
1. Homepage loads correctly
2. Load example application
3. Click "შეფასება" (Evaluate)
4. Results display correctly

---

## Docker Deployment

### Build Image

```bash
cd lxr-whitelist
docker build -t lxr-whitelist:latest .
```

### Run Container

```bash
docker run -d \
  -p 80:80 \
  --name lxr-whitelist \
  --restart unless-stopped \
  lxr-whitelist:latest
```

### Access Application

```bash
# Local
http://localhost

# Remote
http://your-server-ip
```

---

## Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  whitelist:
    build: .
    container_name: lxr-whitelist
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
```

Deploy:

```bash
docker-compose up -d
```

---

## Nginx Reverse Proxy (Optional)

If deploying behind existing Nginx:

```nginx
server {
    listen 80;
    server_name whitelist.wolves.land;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Environment Configuration

**No environment variables required!**

This is a fully client-side application. All evaluation logic runs in the browser.

---

## SSL/HTTPS

### With Coolify
SSL is automatic when you configure a domain.

### Manual (Certbot)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d whitelist.wolves.land

# Auto-renewal is configured automatically
```

---

## Performance Optimization

### Nginx Caching (if using custom Nginx)

Add to your `nginx.conf`:

```nginx
# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

---

## Monitoring

### Health Check Endpoint

```bash
curl http://your-domain/
# Should return 200 OK
```

### Docker Health Check

```bash
docker ps
# Check STATUS column shows "healthy"
```

### Logs

```bash
# Docker logs
docker logs lxr-whitelist

# Follow logs
docker logs -f lxr-whitelist
```

---

## Updating

### With Coolify
1. Push changes to GitHub
2. In Coolify, click **"Redeploy"**
3. Wait for build to complete

### Manual Docker

```bash
# Pull latest changes
git pull origin main

# Rebuild image
docker build -t lxr-whitelist:latest .

# Stop and remove old container
docker stop lxr-whitelist
docker rm lxr-whitelist

# Start new container
docker run -d -p 80:80 --name lxr-whitelist --restart unless-stopped lxr-whitelist:latest
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker logs lxr-whitelist

# Check if port is in use
sudo netstat -tulpn | grep :80

# Try different port
docker run -d -p 8080:80 --name lxr-whitelist lxr-whitelist:latest
```

### Build Fails

```bash
# Clear Docker cache
docker builder prune -a

# Rebuild
docker build --no-cache -t lxr-whitelist:latest .
```

### Application Not Loading

1. Check if container is running: `docker ps`
2. Check logs: `docker logs lxr-whitelist`
3. Verify port mapping: `docker port lxr-whitelist`
4. Test internally: `docker exec lxr-whitelist wget -O- http://localhost`

---

## Custom Domain Setup

### DNS Configuration

Add A record pointing to your server:

```
Type: A
Name: whitelist (or @ for root)
Value: YOUR_SERVER_IP
TTL: 3600
```

### Update Coolify

1. Go to your application settings
2. Add domain: `whitelist.wolves.land`
3. Coolify will configure SSL automatically

---

## Backup & Restore

### Backup

```bash
# Backup Docker image
docker save lxr-whitelist:latest | gzip > lxr-whitelist-backup.tar.gz

# Backup source code (if modified)
tar -czf lxr-whitelist-source.tar.gz /path/to/lxr-whitelist
```

### Restore

```bash
# Restore Docker image
gunzip -c lxr-whitelist-backup.tar.gz | docker load

# Run restored image
docker run -d -p 80:80 --name lxr-whitelist lxr-whitelist:latest
```

---

## Security Checklist

- [x] HTTPS enabled (via Coolify or Certbot)
- [x] Security headers configured (in nginx.conf)
- [x] No sensitive data in environment variables
- [x] Container runs as non-root (Nginx Alpine)
- [x] Regular updates applied
- [x] Health checks enabled
- [x] Logs monitored

---

## Support

- 🌐 **Website:** [wolves.land](https://www.wolves.land)
- 💬 **Discord:** [The Land of Wolves](https://discord.gg/CrKcWdfd3A)
- 📦 **GitHub Issues:** [iboss21/lxr-whitelist](https://github.com/iboss21/lxr-whitelist/issues)

---

**🐺 The Land of Wolves | მგლების მიწა**
