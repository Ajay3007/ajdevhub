---
title: Blog
layout: default
---

# Blog

Welcome to the blog — short posts, tutorials and notes.

<section class="content wrap">
  <div class="section-title">
    <h2>Latest posts</h2>
  </div>

  <div class="blog-list">
    {% for post in paginator.posts %}
    <article class="post-card">
      {% if post.image %}
      <figure style="margin:0 0.6rem 0 0;flex:0 0 220px;">
        <a href="{{ post.url | relative_url }}"><img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width:220px;height:auto;border-radius:8px;display:block"/></a>
      </figure>
      {% endif %}
      <div style="flex:1">
        <div class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        <p><a href="{{ post.url | relative_url }}" class="btn ghost">Read →</a></p>
      </div>
    </article>
    {% endfor %}
  </div>

  <!-- Pagination -->
  <nav class="section" aria-label="Blog pagination" style="margin-top:1.25rem">
    <div style="display:flex;gap:.5rem;align-items:center;">
      {% if paginator.previous_page %}
        {% if paginator.previous_page == 1 %}
          <a class="btn" href="{{ '/blogs/' | relative_url }}">← Newer</a>
        {% else %}
          <a class="btn" href="{{ '/blogs/page' | append: paginator.previous_page | append: '/' | relative_url }}">← Newer</a>
        {% endif %}
      {% endif %}

      <span style="color:var(--muted)">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>

      {% if paginator.next_page %}
        <a class="btn" href="{{ '/blogs/page' | append: paginator.next_page | append: '/' | relative_url }}">Older →</a>
      {% endif %}
    </div>
  </nav>
</section>
