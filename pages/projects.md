---
title: Projects
permalink: /projects/
layout: primary
lead: We design, prototype, and build lightweight & open technology tools with NYC urban planners.
content_wide: true
content_focus: false
banner_cta: true
gridless: true
---

<div class="usa-grid">
  <section class="usa-section">
    <div class="usa-section-bottom">
      <h3>We take on a single project a time, working closely with our customers from concept to delivery in a matter of weeks.</h3>
      <p>All of our work is open by default, so just about every project we've worked on will be listed here. Click a project's card to read the full profile.</p>
      <p>Check out our <a href="/site/pipeline">pipeline page</a> to view our current and upcoming projects, and our project ideas listing</p>
    </div>
    <div class="usa-flex usa-flex-wrap">
      {% assign projects_list = site | find_collection: 'projects' | weighted_sort: 'project_weight', 'title' %}
      {% for project in projects_list %}
        {% include card.html
         image_src=project.image
         image_alt=project.image_accessibility
         image_icon=project.image_icon
         tagline=project.title
         description=project.excerpt
         link=project.permalink
        %}
      {% endfor %}
    </div>
  </section>
</div>
