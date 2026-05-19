# profile-api

a API to Data Profile

## Getting Started

```bash
npm install
npm run dev
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /ready | Readiness probe |
| GET | /api/v1/hello | Hello endpoint |

## Docker

```bash
docker build -t profile-api .
docker run -p 3000:3000 profile-api
```
