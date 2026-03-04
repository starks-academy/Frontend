# Stacks Academy

**AI‑powered learning platform for Bitcoin builders on Stacks L2**

## Overview

Stacks Academy provides a structured learning path for developers to master:

- **Stacks fundamentals**
- **Clarity smart contracts**
- **sBTC & DeFi**
- **Capstone project**

Features include an AI tutor powered by Claude, an in‑browser Clarity playground, AI‑graded assessments, NFT certificates (SIP‑009), a builder gallery, and gamified XP/levels.

## Repository Structure

```
stacks‑academy/
├─ README.md               # ← this file
├─ package.json            # npm workspaces definition
├─ .gitignore
├─ frontend/               # React/Next.js UI
├─ ai‑tutor/               # Node.js backend for AI tutor
├─ clarity‑playground/     # In‑browser Clarity editor
├─ nft‑service/            # NFT certificate service
└─ gallery/                # Builder leaderboard
```

## Quick Start

```bash
# Clone the repo
git clone <repo‑url>
cd stacks‑academy

# Install dependencies for all packages
npm install

# Run the frontend (example)
cd frontend
npm run dev
```

## Contributing

We welcome contributions! Please see the `CONTRIBUTING.md` for guidelines.
