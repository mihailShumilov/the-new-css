# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | Yes       |

## Reporting a Vulnerability

If you discover a security issue, please report it responsibly.

**Do not open a public issue.** Instead, email the maintainer directly or use [GitHub's private vulnerability reporting](https://github.com/mihailShumilov/the-new-css/security/advisories/new).

You can expect an acknowledgment within 48 hours and a resolution timeline within 7 days.

## Scope

The New CSS is a pure CSS library with no JavaScript runtime. The primary security considerations are:

- CSS injection via user-controlled class names
- Supply chain integrity of published npm packages (verified with npm provenance)
