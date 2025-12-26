---
title: Tags
layout: default
---

# Tags

List of tags used in posts.

<ul>
{% for tag in site.tags %}
  <li><a href="{{ '/tags/' | append: tag[0] | append: '/' | relative_url }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>
