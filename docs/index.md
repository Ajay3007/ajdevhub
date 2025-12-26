---
title: Ajay's Dev Hub
layout: default
---


# Ajay's Dev Hub

A **systems & networking learning hub** focused on  
**C++ • DPDK • VPP • OS Internals • System Design**

Built for:
- Engineers preparing for **systems / networking interviews**
- Developers learning **low-level performance engineering**
- Practitioners who prefer **practical explanations + code**



## Quick navigation

Explore topics with quick-access cards — click to open any section.

<div class="quick-grid">
	<div class="nav-card" data-icon="cpp">
		<img src="{{ '/assets/icons/cpp.svg' | relative_url }}" class="icon" alt="C++">
		<h4>C++ Concepts</h4>
		<p class="muted">Language features, modern C++ idioms and examples.</p>
		<a class="link-cta" href="{{ site.baseurl }}/cpp-concepts/">Open</a>
	</div>
	<div class="nav-card" data-icon="dsa">
		<img src="{{ '/assets/icons/dsa.svg' | relative_url }}" class="icon" alt="DSA">
		<h4>DSA</h4>
		<p class="muted">Data structures, patterns and problem-solving templates.</p>
		<a class="link-cta" href="{{ site.baseurl }}/dsa/">Open</a>
	</div>
	<div class="nav-card" data-icon="oop">
		<img src="{{ '/assets/icons/oop.svg' | relative_url }}" class="icon" alt="OOP">
		<h4>OOP</h4>
		<p class="muted">Object-oriented design patterns and practical projects.</p>
		<a class="link-cta" href="{{ site.baseurl }}/cpp-oop/">Open</a>
	</div>
	<div class="nav-card" data-icon="network">
		<img src="{{ '/assets/icons/network.svg' | relative_url }}" class="icon" alt="Networking">
		<h4>Networking</h4>
		<p class="muted">Routing, protocols, and practical network examples.</p>
		<a class="link-cta" href="{{ site.baseurl }}/networking/">Open</a>
	</div>
	<div class="nav-card" data-icon="dpdk">
		<img src="{{ '/assets/icons/dpdk.svg' | relative_url }}" class="icon" alt="DPDK">
		<h4>DPDK</h4>
		<p class="muted">DPDK concepts, memory model and sample apps.</p>
		<a class="link-cta" href="{{ site.baseurl }}/dpdk/">Open</a>
	</div>
	<div class="nav-card" data-icon="vpp">
		<img src="{{ '/assets/icons/vpp.svg' | relative_url }}" class="icon" alt="VPP">
		<h4>VPP</h4>
		<p class="muted">VPP node examples and forwarding pipelines.</p>
		<a class="link-cta" href="{{ site.baseurl }}/vpp/">Open</a>
	</div>
	<div class="nav-card" data-icon="os">
		<img src="{{ '/assets/icons/os.svg' | relative_url }}" class="icon" alt="OS">
		<h4>Operating Systems</h4>
		<p class="muted">Process, memory, and concurrency internals.</p>
		<a class="link-cta" href="{{ site.baseurl }}/os/">Open</a>
	</div>
	<div class="nav-card" data-icon="system">
		<img src="{{ '/assets/icons/system.svg' | relative_url }}" class="icon" alt="System">
		<h4>System Design</h4>
		<p class="muted">High-level system architecture and patterns.</p>
		<a class="link-cta" href="{{ site.baseurl }}/system-design/">Open</a>
	</div>
</div>

---

## 📚 Guided Learning Paths

If you're new, follow one of these paths:

<div class="card-grid">
  <div class="card">
    <h3>🧑‍💻 C++ → Systems</h3>
    <p class="muted">
      Start from modern C++, move into OOP, memory, and low-level design.
    </p>
    <p><a href="{{ site.baseurl }}/cpp-oop/">Start →</a></p>
  </div>

  <div class="card">
    <h3>🌐 Networking → DPDK</h3>
    <p class="muted">
      TCP/IP basics → packet processing → DPDK internals.
    </p>
    <p><a href="{{ site.baseurl }}/networking/">Start →</a></p>
  </div>

  <div class="card">
    <h3>🏗 System Design</h3>
    <p class="muted">
      Learn scalable architectures with systems-first thinking.
    </p>
    <p><a href="{{ site.baseurl }}/system-design/">Start →</a></p>
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

---

## 🚀 Latest Projects

<div class="simple-list">
	{% assign projects = site.data.projects | default: site.pages | where_exp:"p","p.url contains '/projects'" %}
	{% if projects and projects.size > 0 %}
		<ul>
			{% for p in projects limit:6 %}
				<li>
					<a href="{{ p.url | relative_url }}">{{ p.title | default: p.name }}</a>
					{% if p.excerpt %} - <span class="muted">{{ p.excerpt }}</span>{% endif %}
				</li>
			{% endfor %}
		</ul>
	{% else %}
		<ul>
			<li><a href="{{ site.baseurl }}/projects/">Car project</a> - <span class="muted">A simple OOP/system-design demo with source code.</span></li>
		</ul>
	{% endif %}
</div>

---

## 📝 Latest Blog Posts

<div class="simple-list">
	<ul>
		{% for post in site.posts limit:6 %}
			<li>• <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - <span class="muted">{{ post.date | date: "%b %-d, %Y" }}</span></li>
		{% endfor %}
	</ul>
	<p><a href="{{ site.baseurl }}/blogs/">Read More Posts →</a></p>
</div>