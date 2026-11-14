---
layout: page
title: Outreach
permalink: /outreach/
description: Below are some of the outreach activities I have taken part in to make science more accessible to everyone!
nav: true
nav_order: 3
---

<div class="projects">
  {% assign sorted_outreach = site.outreach | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_outreach %}
      {% include outreach/outreach_card.liquid %}
    {% endfor %}
  </div>
</div>
