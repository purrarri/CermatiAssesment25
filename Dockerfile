FROM cypress/base:18.6.0

WORKDIR /e2e-test

# copy the test folder and related json files
COPY ./cypress ./cypress
COPY ./cypress.config.js .
COPY ./package.json .
COPY ./package-lock.json .

# install cypress npm package
ENV CI=1
RUN npm ci --force