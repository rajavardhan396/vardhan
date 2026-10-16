# Evaluation Plan — AI Tech Consultant

> No benchmark results are claimed yet. Run the cases and replace the placeholders below with measured observations.

## Measurement protocol

For each task, prepare at least 20 cases. Compare at least two Claude model/configuration choices where available. Record model/version, prompt version, input size, output size, elapsed time, retries, estimated API cost, and human-rated quality. Use the same cases and scoring rubric for each comparison.

## Task 1 — Knowledge Brain

Measure:
- Answer correctness and completeness
- Citation precision: whether cited articles support the answer
- Retrieval recall on known-answer questions
- Abstention quality when the corpus lacks an answer
- Image-grounded answer accuracy
- Freshness after article updates and deletions
- Latency and cost per query

Test categories:
1. Direct how-to question
2. Question requiring two articles
3. Screenshot contains the relevant instruction
4. Ambiguous question requiring clarification
5. Unsupported question should abstain
6. Updated article replaces old answer
7. Deleted article no longer appears
8. Duplicate or canonical URL
9. Crawl interruption and resume
10. Rate limiting / temporary server error
11–20. Additional realistic questions across payments, design, settings, refunds, and cancellation topics.

## Task 2 — Inbox Agent

Create at least 50 realistic emails across how-to, project request, refund, complaint, quote, follow-up, and other categories. Keep a held-out set for final testing.

Measure:
- Intent classification accuracy and macro F1
- Factual correctness against Knowledge Brain evidence
- Tone and policy adherence
- Schema validity
- Human edit distance / acceptance rate
- Latency, retries, and cost per draft
- Safe routing for refunds, complaints, and low-confidence messages

Include prompt-injection attempts in email bodies and verify they are treated as untrusted content. Test that the agent does not autonomously send emails during the initial human-approved phase.

## Task 3 — Meeting to Scope of Work

Use at least three recorded role-play meetings, including one follow-up meeting that changes the initial requirements. Create at least 20 evaluation cases from the transcripts and variations.

Measure:
- Requirement extraction precision and recall
- Coverage of assumptions, dependencies, and open questions
- Estimate quality against reviewer-approved ranges
- Detection of existing product settings via Task 1
- Scope-change classification accuracy
- Proposal schema validity and readability
- Cost, latency, retries, and human revision effort

Test long transcripts, contradictory statements, missing information, and requests outside the agreed scope. No proposal should be sent without human approval.

## Results table template

| Task | Model/config | Cases | Quality score | Cost per run | Median latency | Failure notes |
|---|---|---:|---:|---:|---:|---|
| Knowledge Brain | To test | 20+ | TBD | TBD | TBD | TBD |
| Inbox Agent | To test | 20+ | TBD | TBD | TBD | TBD |
| Meeting to Scope | To test | 20+ | TBD | TBD | TBD | TBD |

Do not fill TBD values with estimates presented as measured results. Document the evaluation dataset, scoring rubric, and model/prompt versions used.