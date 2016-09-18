FROM node:6.4
MAINTAINER 404069912@qq.com

RUN mkdir /opt/test-node
WORKDIR /opt/test-node
ADD . /opt/test-node
# RUN npm install -g pm2
RUN npm install --production
RUN rm -rf .git/
CMD ["node","-v"]

EXPOSE 3000
