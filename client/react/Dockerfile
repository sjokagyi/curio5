FROM node:22-alpine

# Set the working directory
WORKDIR /client/react

# Remove existing node_modules and package-lock.json
RUN rm -rf node_modules package-lock.json

# Copy only package.json (you can include package-lock.json if you want version lock)
COPY package.json .

# Update esbuild and rollup to ensure version compatibility
RUN npm install esbuild@latest vite@latest rollup@latest

# Install dependencies
RUN npm install

# Update all dependencies to the latest compatible versions
RUN npm update

# Copy rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the port the React app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]