# Agent Air agency website

Standalone public website project for `agentair.io`. It is intentionally separate from the Agent Air Direct website and the Business Signal Intelligence Suite application.

## Local preview

```powershell
npx.cmd serve .
```

The site is static and has no build step.

## Deployment status

Local preview only. This repository has not been deployed and no DNS, domain, redirect, or hosting settings have been changed.

Inspection on September 24, 2026 found that `agentair.io` and `agentairdirect.com` serve the same Agent Air Direct page. The `agentair.io` apex resolves to `13.52.188.95` and `52.52.192.191`, with NS1 nameservers. The provider and site mapping must be confirmed in the owner's hosting account before cutover.

There is deliberately no provider-specific domain file here. Deploy this repository as a new static project, test its staging URL, preserve the existing suite/dashboard destination, and move only the `agentair.io` domain after owner approval. Do not alter `agentairdirect.com`.

## Form and pricing

The agency inquiry form posts to FormSubmit for `hello@agentair.io`. A one-time email activation may be required for the new origin.

Future plan names, prices, allowances, features, and payment links live in `site-config.js`. Unapproved values are `null`, `publishPlans` is `false`, and the public page shows contact-only pricing.
