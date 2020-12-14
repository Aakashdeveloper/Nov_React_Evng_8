FROM node 
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8990
CMD ["npm","start"]