FROM node:20-bullseye

ENV APP_HOME=/app
WORKDIR ${APP_HOME}

# Install PostgreSQL server
RUN apt-get update \
    && apt-get install -y postgresql postgresql-contrib \
    && rm -rf /var/lib/apt/lists/*

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Ensure entrypoint can run
RUN chmod +x docker/docker-entrypoint.sh

ENV DB_HOST=localhost \
    DB_PORT=5432 \
    DB_USER=postgres \
    DB_PASS=postgres \
    DB_NAME=medicinal_plants \
    TYPEORM_SYNC=true \
    PORT=3000

EXPOSE 3000

ENTRYPOINT ["/app/docker/docker-entrypoint.sh"]
