---
layout: page
title: outreach
permalink: /outreach/
description: below are some of the outreach activities I have taken part in to make science more accessible to everyone!
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

<style>
  .outreach-img {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 1rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }
  .outreach-img img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  .outreach-img.cover {
    padding: 0;
  }
  .outreach-img.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
