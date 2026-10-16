# AI Tech Consultant

An Agentic AI capstone that helps software and service businesses answer product questions, draft customer email replies, and convert client meetings into scopes of work.

> **Status:** Initial project scaffold. Core workflows, model evaluations, and integrations still need implementation and verification.

## Architecture

- **Task 1 — Knowledge Brain (Python):** Ingests the Brilliant Directories Solution Center sitemap, extracts article text and image context, indexes knowledge for retrieval, refreshes changed pages, and exposes a FastAPI API with source citations.
- **Task 2 — Inbox Agent (TypeScript):** Classifies customer emails, calls the Knowledge Brain API, produces structured reply drafts, and records human edits as feedback.
- **Task 3 — Meeting to Scope of Work (Python):** Uses cooperating agents to produce a scope, estimated task list, and proposal from transcripts; compares follow-up meetings and requires human approval.

Task 2 and Task 3 must call Task 1 over HTTP. They must not copy its retrieval implementation.

## Repository layout

```text
.
├── task1-knowledge-brain/     # Python / FastAPI
├── task2-inbox-agent/         # TypeScript / Node.js
├── task3-meeting-to-sow/      # Python
├── docs/
│   └── architecture.md
├── README.md
├── DESIGN.md
├── EVALS.md
└── AI_LOG.md
```

## Requirements

- Python 3.11+
- Node.js 20+
- A Claude API key
- Optional vector database credentials, depending on the chosen implementation

Never commit API keys or customer email data. Use a local `.env` file and keep it out of Git.

## Planned setup

Each task will have its own dependency file and environment. Once implementations are complete, a root-level runner will start the services with one command.

## Assignment acceptance checklist

- [ ] Crawl the help-center sitemap politely with resumable batches.
- [ ] Store article text, image descriptions, source URLs, and content hashes.
- [ ] Detect added, changed, and removed articles on daily refresh.
- [ ] Answer questions with citations and an honest “I don't know” path.
- [ ] Expose and document the Knowledge Brain API.
- [ ] Create at least 50 realistic customer email examples.
- [ ] Learn from human-edited and human-written replies with rollback/versioning.
- [ ] Only consider autonomous sending after 20 consecutive unchanged approved drafts of the same category, with a quality-based safety rollback.
- [ ] Produce scopes, hour estimates, and proposals from at least 3 recorded role-play meetings.
- [ ] Show follow-up transcript changes and flag out-of-scope work.
- [ ] Include at least 20 evaluation cases per task, compare at least 2 models, and measure quality, cost, and latency.
- [ ] Include human approval for client-facing proposals.
- [ ] Complete README, DESIGN.md, EVALS.md, AI_LOG.md, and a demo video.

## Reference

Built from the BusinessLabs / Anthropic Applied AI Dev/Engineer capstone brief (October 2026).