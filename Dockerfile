#STAGE 0
#FROM NODE 20 COREPACK IS INCLUDED IN THE IMAGE, BUT IT IS NOT ENABLED BY DEFAULT, SO WE NEED TO ENABLE IT MANUALLY
FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

#STAGE 1
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]