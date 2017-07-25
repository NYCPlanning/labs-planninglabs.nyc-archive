---
customer: "Business Improvement Division"
title: NYC Tax Lot Selector
subtitle: A simple map-based selection tool for generating lists of NYC tax lots
permalink: /projects/tax-lot-selector/
excerpt: A simple map-based selection tool for generating lists of NYC tax lots
image: /assets/img/home/tax-lot-selector.png
image_accessibility: Screenshot of the NYC Tax Lot Selector
project_weight: 2
tag: mapping, gis
expiration_date:
github_repo: https://github.com/NYCPlanning/labs-tax-lot-selector
project_url: "[NYC Tax Lot Selector](https://nycplanning.github.io/labs-tax-lot-selector/)"
learn_more:
product_clients:
---

The DCP Business Improvement Division is responsible for improving the NYC DCP Land Use Application process to be simple, transparent and timely for all of DCP stakeholders.  

The [NYC Tax Lot Selector](https://nycplanning.github.io/labs-tax-lot-selector/) provides a simple Graphical User Interface for creating ad-hoc lists of tax lots, also known as BBLs (short for borough, block, and lot.). BBLs are essentially a unique identifier for a parcel of land in New York City.  These BBL lists can be used as inputs for other information systems or workflows that describe changes to a specific part of the city (rezonings, study areas, etc).

The stated goal of this project is to streamline the creation of lists of selected BBLs for any part of the city through a simple, intuitive map-based web interface.  

The user is presented with a web map of New York City, showing individual tax lots in blue.  The user can build a selection by clicking individual tax lots, or by using a polygon drawing tool to select a larger area on the map.

Once a selection is complete, the user can choose to download data as a CSV or Shapefile.  If they choose CSV, they will get a file with the borough code, block, lot, combined BBL, and street address of each lot in the selection.  If they choose shapefile, they will get the same attributes plus the geometries from MapPLUTO.

<div class="small-caps">Technology</div>
### Leveraging Existing Backend Resources

To solve this problem, we chose to leverage an existing server-side open source mapping solution already in use in our agency.  Our Capital Planning Division used [Carto](https://carto.com) to provide data and map tiler services for the [Capital Planning Platform](https://capitalplanning.nyc.gov), and they already had MapPLUTO loaded and ready to consume.  

### A Simple, Lightweight Frontend
The main frontend mapping technology is [MapboxGL JS](https://www.mapbox.com/mapbox-gl-js/api/), a mapping library that creates highly-customizable vector-based maps in the browser.  Mapbox provides the "basemap" showing points of interest, street names, buildings, etc. We then overlay tax lots by using vector tiles from our Carto backend.

Since the UI was not very complex, we chose to implement it without using a frontend framework.  MapboxGL JS provides an event when the user clicks on the map.  When the user clicks, we check which tax lot(s) were under the mouse pointer.  If they are not already in the selection, we add them.  If they are, we remove them.

The draw tool is is a MapboxGL JS extension called [mapboxgl-draw](https://github.com/mapbox/mapbox-gl-draw), which provides simple controls for drawing geojson geometries (points, lines, and polygons) on the map.  When the user closes their polygon, we assemble a [PostGIS](http://postgis.net/) query and pass it along to the Carto server, which returns [geoJSON](https://en.wikipedia.org/wiki/GeoJSON) data for those BBLs that intersect with the user-drawn polygon.  

```
SELECT the_geom, bbl
FROM mappluto    
WHERE ST_Intersects(
  ST_SetSRID(        
    ST_geomFromGeojson({user-created-geojson}), 4326
  ), the_geom    
)  
```

These BBLs are then added to the selection client-side using the same logic as when the user clicks directly on a lot.

Once the user is ready to download, all we must do is build SQL queries to send to the Carto server indicating which BBLs to include in the selection. The carto SQL API also allows you to specify different formats, so the same query can be applied to generating both a CSV and a Shapefile from the database.

Using IN, we provide a comma-separated list of the selected BBLs in the user's selection, and build out a query with the selected columns:
```
SELECT borocode, block, lot, bbl, address
FROM mappluto
WHERE bbl IN (1000477501,1000480001,1000460003,1000460001,1000460009)
```

The project is a single web page hosted on [github pages](https://pages.github.com/), a great choice for hosting simple sites, as it is free for open projects, and also hosts the site from the same repository that is used for version control.  

For design & layout, we borrowed the simple header, full-screen map, and sidebar of the [Capital Planning Platform](https://capitalplanning.nyc.gov).
