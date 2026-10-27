FROM node:24-alpine AS build
WORKDIR /app
ARG VITE_BACKEND_URL
RUN test -n "$VITE_BACKEND_URL" || (echo "VITE_BACKEND_URL build arg is required" && exit 1)
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
