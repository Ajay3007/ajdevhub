---
layout: default
title: Ajay's Dev Hub
description: Practical learning hub for C++, Networking, DPDK, OS and System Design
---

## 👋 Welcome

Ajay’s Dev Hub is a **systems-first learning platform** focused on:

- Modern **C++ & OOP**
- **Networking internals** and packet processing
- **DPDK & VPP**
- **Operating system concepts**
- **System design** with real engineering context

Built for engineers who want **clarity, depth, and practical understanding**.

---

## 🚀 Quick Navigation

<div class="quick-grid">
  <div class="nav-card">
    <h4>C++ / OOP</h4>
    <p class="muted">Modern C++ patterns & examples</p>
    <a href="{{ site.baseurl }}/cpp-oop/">Explore →</a>
  </div>
  <div class="nav-card">
    <h4>Networking</h4>
    <p class="muted">Protocols, routing & packet flow</p>
    <a href="{{ site.baseurl }}/networking/">Explore →</a>
  </div>
  <div class="nav-card">
    <h4>DPDK</h4>
    <p class="muted">High-performance packet I/O</p>
    <a href="{{ site.baseurl }}/dpdk/">Explore →</a>
  </div>
  <div class="nav-card">
    <h4>Operating Systems</h4>
    <p class="muted">Memory, scheduling, processes</p>
    <a href="{{ site.baseurl }}/os/">Explore →</a>
  </div>
</div>

---

## 📚 Guided Learning Paths

<div class="card-grid">
  <div class="card">
    <h3>C++ → Systems</h3>
    <p class="muted">Language → memory → low-level design</p>
  </div>

  <div class="card">
    <h3>Networking → DPDK</h3>
    <p class="muted">TCP/IP → packet processing → fast I/O</p>
  </div>

  <div class="card">
    <h3>System Design</h3>
    <p class="muted">Scalable systems with engineering tradeoffs</p>
  </div>
</div>

---

## 👨‍💼 About the Author

I’m a software engineer working on **systems, networking, and 5G infrastructure**.  
This site documents **real learning**, not theory dumps — with code, diagrams, and explanations.

---

## 📝 Latest Blog Posts

<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="muted">({{ post.date | date: "%b %d, %Y" }})</span>
  </li>
{% endfor %}
</ul>

<p><a href="{{ site.baseurl }}/blogs/">Read all posts →</a></p>
