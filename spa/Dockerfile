# Stage 1
FROM node AS build

WORKDIR /spa

COPY ./spa/package*.json .

RUN npm install 

COPY ./spa .

RUN npm run build

# Stage 2
FROM nginx:latest

COPY --from=build /spa/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]