FROM node

WORKDIR /app

# from(.) to (/app)
COPY . . 

RUN npm install

EXPOSE 3000

CMD ["node", "app"]



