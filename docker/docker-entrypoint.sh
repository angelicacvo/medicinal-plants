#!/bin/bash
set -euo pipefail

PG_LIB_DIR=/usr/lib/postgresql
PG_MAJOR=$(ls "${PG_LIB_DIR}" | sort -Vr | head -n1)
PG_CTL="${PG_LIB_DIR}/${PG_MAJOR}/bin/pg_ctl"
INITDB="${PG_LIB_DIR}/${PG_MAJOR}/bin/initdb"
PG_DATA=/var/lib/postgresql/data

mkdir -p "${PG_DATA}"
chown -R postgres:postgres /var/lib/postgresql

if [ ! -s "${PG_DATA}/PG_VERSION" ]; then
  su - postgres -c "${INITDB} -D ${PG_DATA}"
fi

su - postgres -c "${PG_CTL} -D ${PG_DATA} -o \"-c listen_addresses='*'\" -w start"
trap 'su - postgres -c "${PG_CTL} -D ${PG_DATA} -m fast -w stop"' EXIT

ROLE_EXISTS=$(su - postgres -c "psql -tAc \"SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'\"") || true
if [[ "${ROLE_EXISTS}" != "1" ]]; then
  su - postgres -c "psql -c \"CREATE USER \\\"${DB_USER}\\\" WITH PASSWORD '${DB_PASS}';\""
fi

su - postgres -c "psql -c \"ALTER USER \\\"${DB_USER}\\\" WITH PASSWORD '${DB_PASS}';\""

DB_EXISTS=$(su - postgres -c "psql -tAc \"SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'\"") || true
if [[ "${DB_EXISTS}" != "1" ]]; then
  su - postgres -c "createdb -O \"${DB_USER}\" \"${DB_NAME}\""
fi

export DB_HOST=localhost
export DB_PORT=${DB_PORT:-5432}
export DB_USER=${DB_USER:-postgres}
export DB_PASS=${DB_PASS:-postgres}
export DB_NAME=${DB_NAME:-medicinal_plants}
export TYPEORM_SYNC=${TYPEORM_SYNC:-true}
export PORT=${PORT:-3000}

npm run start
