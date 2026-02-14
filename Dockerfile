# ═══════════════════════════════════════════════════════════════════════════════
# 🐺 LXR WHITELIST EVALUATOR - Dockerfile
# ═══════════════════════════════════════════════════════════════════════════════
# Purpose: Production-grade Docker container for wolves.land whitelist system
# Author: iBoss21 / The Lux Empire
# Deployment: Coolify / Docker / Kubernetes
# ═══════════════════════════════════════════════════════════════════════════════

# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source
COPY . .

# Build application
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
