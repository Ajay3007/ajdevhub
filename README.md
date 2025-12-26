# ajdevhub — Ajay's Developer Hub


This repository contains documentation and tutorials across topics I study: C++ OOP, DPDK, VPP, Networking, Operating Systems, and System Design.

Visit the site : [👉 HERE](https://ajay3007.github.io/ajdevhub/)


## Quick start

## [Getting Started](/docs/index.md)

## [Learning](/docs/learning/index.md)

## [Projects](/docs/projects/index.md)

## [Blogs](/docs/blogs/index.md)

## [About](/docs/about.md)

---

Note: I moved DSA notes into `docs/dsa/` so they render on the GitHub Pages site and fixed internal links. If you make edits under `src/DSA/` in the future, consider syncing them into `docs/dsa/` to keep the site up-to-date.

Automation: A GitHub Action (`.github/workflows/sync-src-docs.yml`) now runs on pushes to `master` and will mirror markdown and PDFs from `src/` into `docs/` (into `docs/src/` and `docs/assets/pdfs/`) so the site always serves referenced assets.

## Blog posts

Add blog posts to the site by creating files under `docs/_posts/` named `YYYY-MM-DD-your-title.md` with YAML front matter, for example:

```yaml
---
title: "My new post"
date: 2025-12-31 10:00:00 +0000
layout: default
excerpt: "Short summary that appears on the blog index."
---

Post content here.
```

Posts will appear at `{{ site.baseurl }}/YYYY/MM/DD/your-title.html` and will be listed on `{{ site.baseurl }}/blogs/`.

