---
layout: notebook
title: Notebook
contentId: note
description: ""
permalink: "/note/index.html"
---

{% for notes in site.data.notes %}
{% capture title %}{{ notes.title | markdownify | remove: "<p>" | remove: "</p>" }}{% endcapture %}
<div>
  <h3>
    <a href="{{ site.baseurl }}{{ notes.url }}" class="post-title" title="{{ title | strip_html }}">
      <h3>{{ title }}</h3>
    </a>
  </h3>
</div>
{% endfor %}
