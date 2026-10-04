# Implementation report

## Scope

This is a new static website for the agency-facing Agent Air product. No files were edited in Agent Air Direct or the Business Signal Intelligence Suite.

## Files

- Created `index.html`, `styles.css`, `script.js`, `site-config.js`, and this report.
- Replaced the one-line placeholder in `README.md` with project and deployment documentation.
- Removed no files.

## Routes

- `/`: agency product website
- `/#platform`, `/#workflow`, `/#features`, `/#agencies`, `/#pricing`, `/#resources`, `/#agency-demo`: section routes

There are no dashboard, authentication, or API routes here. Those remain separate and unchanged.

## Current domain behavior

Inspected September 24, 2026:

- `https://agentair.io/` and `https://agentairdirect.com/` serve the same Agent Air Direct homepage content.
- The browser inspection received the page directly rather than observing a URL redirect.
- `agentair.io` resolves to `13.52.188.95` and `52.52.192.191`.
- Authoritative nameservers are `dns1.p03.nsone.net` through `dns4.p03.nsone.net`.
- The hosting account and exact project mapping cannot be established from public DNS or this new repository.
- No live setting was changed.

## Owner-controlled hosting steps

1. Inspect the hosting account currently mapped to `agentair.io` and record its domains and redirect rules.
2. Confirm and preserve the separate suite/dashboard destination.
3. Deploy this repository as a new static project.
4. Test and approve the staging URL.
5. Move only `agentair.io` and, if desired, `www.agentair.io` after approval.
6. Leave `agentairdirect.com` unchanged.

## Form and navigation

The agency form posts to FormSubmit for `hello@agentair.io`. It collects all requested agency fields, includes the required acknowledgment, CAPTCHA, honeypot, and the non-guarantee notice. One-time FormSubmit activation may be required. No test submission was sent.

Navigation includes Platform, How It Works, Features, Pricing, For Agencies, Resources, Request Access, and Book an Agency Demo. Sign In is omitted because no separate public agency login was verified.

## Product evidence and claim limits

Read-only inspection of the suite found implementation surfaces for controlled bulk auditing of up to 50 sites, AUDITUS explanations, client-facing audit reports, AuditVoice call/email/follow-up scripts, and the Client Quote Calculator with editable pricing and markup.

The website does not claim a public API, agency authentication, team access, durable client portfolios, white labeling, CRM integrations, live automation, or guaranteed results. It contains no testimonials, client logos, case studies, result metrics, or product screenshots.

Draft plan names, prices, allowances, support terms, team terms, and payment links are kept unset in `site-config.js`. The public page contains no checkout, trial, subscription, or draft-price action.

## Owner review

- Confirm `hello@agentair.io` as the agency lead recipient.
- Activate FormSubmit if required for this new origin.
- Supply an exact stable suite sign-in URL before adding Sign In.
- Approve all commercial configuration before enabling plan rendering.
- Confirm hosting ownership and mappings before changing the domain.

## Test checklist

- [ ] Agent Air Direct remains unchanged at `agentairdirect.com`
- [ ] Agency homepage works on its staging URL
- [ ] Footer cross-link opens Agent Air Direct
- [ ] Existing direct inquiry form remains unchanged
- [ ] Agency form validates every required field
- [ ] One approved real submission reaches `hello@agentair.io`
- [ ] Existing suite/dashboard destination remains accessible
- [ ] Wide, tablet, and mobile layouts have no horizontal overflow
- [ ] Keyboard navigation and focus behavior work
- [ ] SEO metadata is correct
- [ ] No draft price, allowance, support tier, or payment link appears
- [ ] Domain mapping changes only after staging approval
- [ ] Existing application and API destinations remain unchanged
