FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Temporarily remove prepare script to avoid compilation during install
RUN npm pkg delete scripts.prepare

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]