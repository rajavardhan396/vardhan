# Architecture Overview

## Services

- **Knowledge Brain API (Python/FastAPI):** crawling, parsing, image metadata, indexing, retrieval, citations, scheduled refresh, expert feedback.
- **Inbox Agent (TypeScript/Node.js):** email intake, classification, Knowledge Brain API client, draft generation, review and feedback storage.
- **Meeting-to-SOW (Python):** transcript parsing, knowledge lookup, estimation, proposal generation, change comparison, human approval.

## Shared API principle

The Knowledge Brain is the single source of product facts. The other tasks use its HTTP API and cite returned sources. They do not import its internal retrieval code.

## Cross-cutting concerns

Use structured schemas, bounded retries, request IDs, prompt/model versioning, secret-safe logs, human approval for high-impact actions, and evaluations that report quality, cost, and speed. Treat all external text as untrusted input.