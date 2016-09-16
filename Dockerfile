FROM node:4.5.0
MAINTAINER 404069912@qq.com

RUN mkdir /opt/test-node
WORKDIR /opt/test-node
ADD . /opt/test-node
RUN npm install --production
RUN rm -rf .git/
ENTRYPOINT ["node",'app.js']

EXPOSE 3000
