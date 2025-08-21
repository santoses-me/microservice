# NestJS + Aurora (Prisma) + DynamoDB Starter

A production‑minded NestJS starter that:
- Uses **Prisma** to talk to **Aurora Serverless v2 (PostgreSQL)** (recommend via **RDS Proxy**).
- Uses AWS SDK v3 **DynamoDBDocumentClient** to talk to **DynamoDB**.
- Follows clean layering: controller → service → repository.
- Includes config validation, global validation pipe, and health endpoints.

> No Docker Compose or DynamoDB Local included; point to your real AWS resources (or your own local infra).

## Quick Start

1. **Install deps**
   ```bash
   npm i
   ```

2. **Environment variables** — copy `.env.example` to `.env` and fill in values.
   ```bash
   cp .env.example .env
   ```

3. **Prisma (Aurora‑Postgres)** — Aurora connection string typically points to your **RDS Proxy** endpoint.
   ```bash
   npm run prisma:migrate   # creates the User table
   npm run prisma:generate
   ```

4. **Run**
   ```bash
   npm run start:dev
   # GET http://localhost:3000/v1/health/live
   # GET http://localhost:3000/v1/users
   ```

### Environment variables

- `PORT` — default `3000`
- `AURORA_DATABASE_URL` — Postgres connection string (e.g., `postgresql://user:pass@proxy.mydomain:5432/app?schema=public`)
- `AWS_REGION` — e.g. `us-east-1`
- `DDB_SESSIONS_TABLE` — DynamoDB table name for sessions

> AWS credentials are resolved by the SDK (env vars, shared credentials file, or instance role). In production prefer **task or Lambda execution role**.

### DynamoDB table

Create a table with **partition key** `id (S)` and enable **TTL** on the `ttl` attribute.
Recommended billing mode: **PAY_PER_REQUEST**.

### Notes

- Put Aurora behind **RDS Proxy** to protect the DB from connection storms.
- Keep secrets in **AWS Secrets Manager** or **SSM Parameter Store**.
- Replace/extend `Users` & `Sessions` modules to fit your domain.
