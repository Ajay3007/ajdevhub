# ajdevhub — Ajay's Developer Hub


This repository contains documentation and tutorials across topics I study: C++ OOP, DPDK, VPP, Networking, Operating Systems, and System Design. The `docs/` folder powers the GitHub Pages site.


Visit the site at: https://ajay3007.github.io/ajdevhub/


## Quick start
1. Clone this repo
2. Browse `docs/` locally or open the GitHub Pages site


## Contributing
Add markdown files under `docs/` for new topics and push to `main`.

## Folder Structure

```
ajdevhub/
├── docs/
│   ├── index.md
│   ├── cpp-oop/
│   │   ├── index.md
│   │   ├── shallow-vs-deep.md
│   │   ├── operator-overloading.md
│   │   ├── smart-pointers.md
   │   └── car-project.md
│   ├── networking/
│   │   ├── index.md
│   │   ├── osi.md
│   │   ├── dhcp.md
│   │   └── routing.md
│   ├── dpdk/
│   │   ├── index.md
│   │   ├── hugepages.md
│   │   ├── mbuf.md
│   │   └── dpdk-flow.md
│   ├── vpp/
│   │   ├── index.md
│   │   ├── vpp-nodes.md
│   │   ├── plugins.md
│   │   └── interfaces.md
│   ├── os/
│   │   ├── index.md
│   │   ├── processes.md
│   │   ├── memory.md
│   │   └── threads.md
│   ├── system-design/
│   │   ├── index.md
│   │   ├── load-balancer.md
│   │   ├── caching.md
│   │   ├── databases.md
│   │   └── microservices.md
│   └── assets/
│       ├── uml-smartptr.svg
│       └── uml-friend.svg
└── .github/
	└── workflows/
		└── pages-deploy.yml
```

## What each folder contains

- **`docs/`**: Primary documentation content. Markdown pages live here and can be published as a static site.
- **`docs/cpp-oop/`**: Notes and small projects demonstrating C++ object-oriented programming concepts.
- **`docs/networking/`**: Networking fundamentals (OSI model, DHCP, routing).
- **`docs/dpdk/`**: DPDK-specific notes such as hugepages, mbuf, and flow API.
- **`docs/vpp/`**: Vector Packet Processing notes, nodes, plugins and interfaces.
- **`docs/os/`**: Operating systems topics: processes, memory, and threading.
- **`docs/system-design/`**: System design patterns: load balancing, caching, databases, microservices.
- **`docs/assets/`**: Images and SVG diagrams referenced by docs.
- **`.github/workflows/`**: GitHub Actions workflows. `pages-deploy.yml` deploys the `docs/` folder to GitHub Pages on `main`.

## Quick preview (local)

To preview the documentation locally as static files, you can serve the `docs/` directory. Example commands:

PowerShell / Command Prompt:

```
python -m http.server 8000 --directory docs
```

Or (Node):

```
npx http-server docs -p 8000
```

Then open `http://localhost:8000` in your browser.
