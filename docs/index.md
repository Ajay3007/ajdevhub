---
title: Ajay's Dev Hub
layout: default
---


# Ajay's Dev Hub


Welcome — a centralized place for my notes, tutorials and project links on C++, networking, DPDK, VPP, OS, and system design.


## Quick navigation

Explore topics with quick-access cards — click to open any section.

<div class="quick-grid">
	<div class="nav-card" data-icon="cpp">
		<div class="icon">💠</div>
		<h4>C++ Concepts</h4>
		<p class="muted">Language features, modern C++ idioms and examples.</p>
		<a class="link-cta" href="{{ site.baseurl }}/cpp-concepts/">Open</a>
	</div>
	<div class="nav-card" data-icon="dsa">
		<div class="icon">🧠</div>
		<h4>DSA</h4>
		<p class="muted">Data structures, patterns and problem-solving templates.</p>
		<a class="link-cta" href="{{ site.baseurl }}/dsa/">Open</a>
	</div>
	<div class="nav-card" data-icon="oop">
		<div class="icon">🏗️</div>
		<h4>OOP</h4>
		<p class="muted">Object-oriented design patterns and practical projects.</p>
		<a class="link-cta" href="{{ site.baseurl }}/cpp-oop/">Open</a>
	</div>
	<div class="nav-card" data-icon="network">
		<div class="icon">🌐</div>
		<h4>Networking</h4>
		<p class="muted">Routing, protocols, and practical network examples.</p>
		<a class="link-cta" href="{{ site.baseurl }}/networking/">Open</a>
	</div>
	<div class="nav-card" data-icon="dpdk">
		<div class="icon">⚡</div>
		<h4>DPDK</h4>
		<p class="muted">DPDK concepts, memory model and sample apps.</p>
		<a class="link-cta" href="{{ site.baseurl }}/dpdk/">Open</a>
	</div>
	<div class="nav-card" data-icon="vpp">
		<div class="icon">🚀</div>
		<h4>VPP</h4>
		<p class="muted">VPP node examples and forwarding pipelines.</p>
		<a class="link-cta" href="{{ site.baseurl }}/vpp/">Open</a>
	</div>
	<div class="nav-card" data-icon="os">
		<div class="icon">🧩</div>
		<h4>Operating Systems</h4>
		<p class="muted">Process, memory, and concurrency internals.</p>
		<a class="link-cta" href="{{ site.baseurl }}/os/">Open</a>
	</div>
	<div class="nav-card" data-icon="system">
		<div class="icon">🧭</div>
		<h4>System Design</h4>
		<p class="muted">High-level system architecture and patterns.</p>
		<a class="link-cta" href="{{ site.baseurl }}/system-design/">Open</a>
	</div>
</div>

---


## About
This site gathers tutorials, example code, diagrams, and notes from my learning journey. Each topic links to code repositories where appropriate.


## How to use
Pick a topic above. Each topic page contains:
- Overview and goals
- Example code links (to the code repos)
- Diagrams and commands to run samples locally


---

## Contact
Find me on GitHub: [Ajay3007](https://github.com/Ajay3007)

---

## Explore

<div class="card-grid">
  <div class="card">
    <h3>Learning</h3>
    <p class="muted">Core topics I study: C++/OOP, DSA, Networking, DPDK, VPP, OS and System Design.</p>
    <p><a href="{{ site.baseurl }}/learning/">Open →</a></p>
  </div>

  <div class="card">
    <h3>Projects</h3>
    <p class="muted">Select projects and example code from my experiments and demos.</p>
    <p><a href="{{ site.baseurl }}/projects/">Open →</a></p>
  </div>

  <div class="card">
    <h3>Blogs</h3>
    <p class="muted">Short posts, tutorials and notes from my learning journey.</p>
    <p><a href="{{ site.baseurl }}/blogs/">Read posts →</a></p>
  </div>

  <div class="card">
    <h3>About</h3>
    <p class="muted">A short bio and contact information.</p>
    <p><a href="{{ site.baseurl }}/about/">About →</a></p>
  </div>
</div>

---

If you'd like the same content to remain visible under a raw README or alternate index, tell me and I can add a small toggle to show the plain-markdown view.

---

## Latest post

{% assign latest = site.posts | first %}
{% if latest %}
<div class="card-grid">
	<div class="card">
		<h3><a href="{{ latest.url | relative_url }}">{{ latest.title }}</a></h3>
		<p class="muted">{{ latest.excerpt | strip_html | truncate:120 }}</p>
		<p class="muted">{{ latest.date | date: "%b %-d, %Y" }}</p>
		<p><a href="{{ latest.url | relative_url }}" class="btn ghost">Read →</a></p>
	</div>
</div>
{% endif %}