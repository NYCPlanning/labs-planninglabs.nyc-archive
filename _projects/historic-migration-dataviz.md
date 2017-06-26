---
customer: "[Population Division](http://www1.nyc.gov/site/planning/data-maps/nyc-population.page)"
title: NYC Historic Migration Data Visualization
subtitle: An interactive visualization of historic U.S. census migration data for New York City
permalink: /projects/historic-migration-dataviz/
excerpt: An interactive visualization of historic U.S. census migration data for New York City
image: /assets/img/home/hero-historic-migration-dataviz.png
image_accessibility: Screenshot of the NYC Historic Migration Data Visualization
project_weight: 2
tag: data visualization
expiration_date:
github_repo: https://github.com/NYCPlanning/labs-migration-viz
project_url: "[NYC Historic Migration Data Visualization](https://nycplanning.github.io/labs-migration-viz/)"
learn_more:
product_clients:
---

DCP's Population Division is New York City government's hub of demographic expertise, is responsible for the compilation, analysis, and dissemination of census and related federal, state, and local data for city agencies, local communities, and the media.

The division is currently working on a larger publication around NYC migration trends, and expressed a need to create compelling and interactive web-based visualizations to complement the static charts, graphs, and tables that are usually included in demographic reports.

The [NYC Historic Migration Data Visualization](https://nycplanning.github.io/labs-migration-viz/) accomplishes two goals:

1. To create a compelling, interactive, and easily shareable website for exploring NYC migration trends data from the U.S. Decennial Census and American Community Survey.

2. To create a re-usable template for future single-page dataviz projects, and a fully-functional project that can be used for teaching/learning basic web development and data visualization with d3.js.

The user can choose from 9 different demographic characteristics, and view inflow, outflow, and net migration for each over 5 decades of census collection.  

When hovering over a bar, a trendline is rendered across the year ranges to visualize the change over time.

<div class="small-caps">Approach</div>
### Bring Static Charts to Life
Planners in the Population Division had already put in a lot of work designing and building static charts to visualize migration data.  These generally lived as images, and were created by using Microsoft Excel's built-in charting capabilities, and then enhancing the vector-based charts in Adobe Illustrator.  The finished charts could then be included in slideshow presentations or reports.


<figure>
  <img src="{{site.baseurl}}/assets/projects/historic-migration-dataviz/static-chart.png" alt="The design standards homepage rendered in Fractal" width="624" height="380" />
  <figcaption>A static chart in a Powerpoint slide showing the same NYC migration data</figcaption>
</figure>

The general layout and color choices of an easy-to-interpret net migration chart already existed, and after some design exercises we ended up taking an approach that would bring the static charts to life, allowing for two major features that would have been harder to accomplish with static charts:

1. The ability to quickly change between the nine characteristics, allowing for full exploration of the data in a single view

2. The ability to drill-down by selecting a specific group (a specific job type in the occupation category, for example), and view that metric's historical trend.

3. The addition of some human-readable text to complement each bar on hover, along with some general narrative about each characteristic.

<div class="small-caps">Technology</div>

The main technology used to render the interactive charts is an open source javascript library called D3.js.  D3, short for Data-driven Documents, is a visualization library that allows for easy linking of data to elements in a web page.  The library does a whole lot more than just bar charts, and is a popular choice for custom complex visualization projects.  For more on D3.js, [check out the gallery](https://github.com/d3/d3/wiki/Gallery).

The project is a single web page hosted on [github pages](https://pages.github.com/), a great choice for hosting simple sites, as it is free for open projects, and also hosts the site from the same repository that is used for version control.  

For design & layout, we chose [bootstrap](http://getbootstrap.com/), as it allowed us to re-use the header, footer, and design elements from [The NYC Facilities Explorer](https://capitalplanning.nyc/facilities), and focus on building new features.

<p>Other Javascript Libraries used in this web project:</p>
- [chroma.js](https://github.com/gka/chroma.js/) for calculating color gradation
- [underscore.js](http://underscorejs.org/) for client-side data wrangling, preparing raw data for use in d3.js
- [numeral.js](http://numeraljs.com/) for pretty-rendering large numbers (turns 195678 into '195.6k')
