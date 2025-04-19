
# Step 1: Use Node to build the app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# RUN npm run build

# Expose the port used by React
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]