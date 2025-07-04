# Finmars Start Page

This project serves the `dist` directory via an Express server.

## Prerequisites

* Node.js (v22 or later recommended)
* npm

## Setup

```bash
npm install
node server.js
```

Static assets are already included in the `dist` directory, so no separate build
step is required.

The server listens on `PORT` (default `8080`).

### Environment Variables

- `KEYCLOAK_URL` – Keycloak base URL (default `https://dev-auth.finmars.com`)
- `KEYCLOAK_REALM` – Keycloak realm (default `finmars`)
- `KEYCLOAK_CLIENT_ID` – Keycloak client ID (default `finmars`)
- `REDIRECT_PATH` – redirect path after login (default `/v/profile`)
- `PORT` – HTTP port to listen on (default `8080`)

Export variables before running the server, for example:

```bash
KEYCLOAK_URL=https://auth.example.com PORT=3000 node server.js
```

## Docker

Build and run using Docker:

```bash
docker build -t finmars-start-page .
docker run -p 8080:8080 finmars-start-page
```

Use `-e VAR=value` to pass environment variables into the container.
