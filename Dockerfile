FROM node
WORKDIR /apps/
ADD . .
EXPOSE 3000
CMD node Web.js
