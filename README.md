# Solana Wallet Dashboard MVP

A production-style Web3 dashboard built with **Next.js**, **TypeScript**, **Solana Web3.js**, **Prisma**, and **PostgreSQL**. This project demonstrates wallet integration, prediction market data, persistent storage, and portfolio analytics.

---

## Overview

This application showcases a modern full-stack Web3 architecture by combining:

- Solana wallet integration
- Live prediction market data
- PostgreSQL persistence
- Portfolio analytics
- REST APIs
- AI-ready architecture for hedge recommendations

The project was built as a portfolio application inspired by the requirements of a blockchain/full-stack engineering role.

---

## Dashboard-1

![Dashboard-1](./docs/dashboard-1.png)

## Dashboard-2

![Dashboard-2](./docs/Dashboard-2.png)

## Wallet

![Wallet](./docs/Wallet.png)

# Features

## Wallet

- Phantom Wallet integration
- Solana Wallet Adapter
- SOL balance retrieval
- USDC (SPL Token) balance retrieval
- Wallet address management

## Dashboard

- Wallet overview
- Portfolio summary
- Live prediction markets
- Hedge history
- AI recommendation section

## Backend APIs

| Endpoint | Description |
|----------|-------------|
| `GET /api/markets` | Fetch live Polymarket markets |
| `GET /api/hedges` | Retrieve hedge history |
| `POST /api/hedges` | Create a new hedge |
| `POST /api/user` | Create or update user by wallet |
| `GET /api/stats` | Portfolio analytics |
| `GET /api/seed` | Seed demo data |

---

# Technology Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Blockchain

- Solana Web3.js
- Solana Wallet Adapter
- Phantom Wallet
- SPL Token Library

## Backend

- Next.js API Routes
- Prisma ORM
- PostgreSQL

## External Services

- Polymarket API

---

# Architecture

```text
                Phantom Wallet
                       │
                       ▼
            Solana Wallet Adapter
                       │
                       ▼
               Next.js Dashboard
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 Polymarket API    Prisma ORM     Solana RPC
        │              │              │
        ▼              ▼              ▼
 Live Markets     PostgreSQL    SOL / USDC
```

---

# Database Schema

## User

- id
- wallet
- createdAt

## Hedge

- id
- userId
- marketId
- marketName
- amount
- entryPrice
- currentPnl
- status
- createdAt

---

# Getting Started

## Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/solana-wallet-dashboard.git
cd solana-wallet-dashboard
```

## Install dependencies

```bash
npm install
```

## Configure environment variables

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://username:password@localhost:5432/hedgeflow"
```

## Initialize Prisma

```bash
npx prisma generate
npx prisma db push
```

## Run the development server

```bash
npm run dev
```

Open your browser:

```
http://localhost:3000
```

---

# Project Structure

```text
app/
├── api/
│   ├── hedges/
│   ├── markets/
│   ├── stats/
│   ├── user/
│   └── seed/
├── dashboard/

components/
├── dashboard/
├── wallet/

lib/
services/
prisma/
```

---

# Roadmap

- [x] Next.js App Router
- [x] TypeScript
- [x] Prisma ORM
- [x] PostgreSQL integration
- [x] REST APIs
- [x] Polymarket service layer
- [x] Portfolio analytics
- [x] Solana wallet integration
- [ ] Live wallet balance synchronization
- [ ] Real-time P&L updates
- [ ] AI hedge recommendation engine
- [ ] Production deployment

---

# Skills Demonstrated

- Full-Stack Development
- TypeScript
- Next.js
- REST API Design
- PostgreSQL
- Prisma ORM
- Solana Web3 Development
- Wallet Integration
- Blockchain Data Handling
- Prediction Market Integration
- Portfolio Analytics

---

# Future Improvements

- Privy embedded wallet support
- Live Polymarket order execution
- Kalshi integration
- Referral system
- Shareable hedge cards
- Rate limiting and retry mechanisms
- Secure API key rotation
- Mobile optimization (PWA / React Native)

---

# License

This project is intended for educational and portfolio purposes.
