---
layout: page
permalink: /publications/
title: Research
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
  <h2>Publications</h2>
  {% bibliography --query @*[keywords!=working-paper] %}

  <h2 class="mt-5">Working Papers</h2>
  {% bibliography --query @*[keywords=working-paper] %}
</div>
