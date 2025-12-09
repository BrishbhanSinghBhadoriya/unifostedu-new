# --- STEP 1: Install dependencies and build app ---
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    COPY package.json package-lock.json ./
    RUN npm install
    
    COPY . .
    RUN npm run build
    
    
    # --- STEP 2: Production image ---
    FROM node:18-alpine AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production
    ENV PORT=3000
    
    # Next.js ko standalone mode me build karta hai
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    COPY --from=builder /app/public ./public
    
    EXPOSE 3000
    
    CMD ["npm", "server.js"]
    