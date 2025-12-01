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
  <h2>Working Papers</h2>
  {% bibliography --query @*[keywords=working-paper] --sort_by=year --order=ascending --group_by=year --group_order=ascending %}

  <h2 class="mt-5">Publications</h2>
  {% bibliography --query @*[keywords!=working-paper] --sort_by=year --order=descending %}
</div>
