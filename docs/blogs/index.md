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
    {% for post in site.posts %}
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
</section>
