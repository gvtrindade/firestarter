FROM node:14.21.3-bullseye as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/firestarter-demo /usr/share/nginx/html