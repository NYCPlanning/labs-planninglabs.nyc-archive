---
layout: post
date: '2017-06-12T11:14:29-04:00'
title: "Cloning 18f.gsa.gov"


description: By leveraging an existing open source project, we were able to get planninglabs.nyc up and running in a couple of days.  We chose to clone 18f.gsa.gov and modify it because it had everything we needed.  In fact, much of Labs’ mission and philosophy is inspired by 18F's, so it makes sense that their site would have a lot of the features we want to have on ours, specifically beautiful and informative project pages, a project index with cards, a blog, responsive standards-based design, and a great content that helps to explain their principles.

excerpt: By leveraging an existing open source project, we were able to get planninglabs.nyc up and running in a couple of days.  We chose to clone 18f.gsa.gov and modify it because it had everything we needed.  In fact, much of Labs’ mission and philosophy is inspired by 18F's, so it makes sense that their site would have a lot of the features we want to have on ours, specifically beautiful and informative project pages, a project index with cards, a blog, responsive standards-based design, and a great content that helps to explain their principles.
image:
authors:
- chriswhong
tags:
- open source
- code reuse

hero: false
---

By leveraging an existing open source project, we were able to get [planninglabs.nyc](https://github.com/nycplanning/labs-planninglabs.nyc) up and running in a matter of hours.  We chose to clone [18f.gsa.gov](https://18f.gsa.gov) and modify it because it had everything we needed.  In fact, much of Labs’ mission and philosophy is inspired by 18F's, so it makes sense that their site would have a lot of the features we want to have on ours, specifically beautiful and informative project pages, a project index with cards, a blog, responsive [standards-based design](https://standards.usa.gov/), and a lot of good content that helps to explain their principles.  It’s also a static site that uses a technology called [jekyll](https://jekyllrb.com/), which doesn’t require a complicated hosting environment and lends itself well to a github-based collaborative development workflow.

Lucky us, they [put their source code on GitHub](https://github.com/18F/18f.gsa.gov) with an open source license, and clear instructions on how to get the development environment up and running.  So, a few minutes after deciding to clone the site, we had it up and running on locally and were formulating a game-plan to modify it to suit our needs.  

**What modifications did we make?**

First, the logos and colors.  18f followed best practices and had a clearly structured SCSS file with color variables in it.  We took a look at the color variants of blue that they used on their site, and tried to match equivalent shades of orange to match DCP’s branding.  With SCSS variables, we can change the colors in [one place](https://github.com/NYCPlanning/labs-planninglabs.nyc/blob/master/_sass/_core/variables.scss#L24), and don’t have to hunt through the codebase changing every blue to an orange.  

```
// Color
$color-light:        #b3efff;
$color-bright:       #ffc861;
$color-medium:       #f1823e;
$color-dark:         #D96B27; // "dcp orange"
$color-base:         #D96B27; // "dcp orange"
$color-black:        #000000;
$color-inverse:      #ffffff;

$color-bright-hover: #f5b744;
$color-medium-hover: #ff711a;

$color-gray-lightest: #f1f1f1; // Adding bc used in our $border-light in this file.
$color-gray-hover   : #fafafa;

```

<figure>
  <img src="{{site.baseurl}}/assets/blog/cloning-18f-gsa-gov/colors-comparison.png" alt="Comparison of 18F's and Labs' color palettes" width="915" />
  <figcaption>Comparison of 18F's and Labs' color palettes. (Made with colllor.com)  </figcaption>
</figure>

Next, we stripped out the images and page content.  As NYC Planning labs is still in its infancy, we only kept _About_, _Contact_, and the _Open Source Policy_ pages.  One by one we modified or wrote new content for each page, adapting it to our mission here at NYC Planning.  We don’t have any photos of our own showing design sessions, whiteboard sketches and post-its yet, so some open-licensed NYC photos from [Flickr](https://www.flickr.com/) will do for now.  

Finally, we cleaned up the blog, removing all posts, and all of the information Jekyll needs about authors, and wrote our _Hello, World!_ post.  We probably spent a few hours once we had everything in place going through each directory and figuring out what else could be chopped.  If we need any of it in the future, we can always refer to the original repo and rebuild parts of the site that we removed, and even contribute back if the opportunity arises. Even if 18F chooses to overhaul their site and make major changes, thanks to the magic of version control we will be able to go back and find the exact version we cloned in June 2017.

**Deployment**

You generally have two options when deploying a Jekyll site:  You can build the site locally, and then move the built directory to a web server, or deploy the unbuilt code to a web server that can build _and_ host it for you when it receives new code.  First, we looked at [GitHub pages](https://pages.github.com/), which can build and host jekyll sites painlessly, but ran into issues because of some of the [custom jekyll plugins](https://jekyllrb.com/docs/plugins/) that the site makes use of.  Furthermore, its not possible to set up SSL on a github pages-hosted site that has a custom domain, so we had to choose another option.

For just about all of our web application hosting we use [dokku](https://github.com/dokku/dokku) (think open source heroku) on a cloud [VPS](https://en.wikipedia.org/wiki/Virtual_private_server).  We love dokku so much, we'll probably write a more in-depth blog post about it soon.  After some googling, we discovered that the the Open Source world has brought us a [jekyll buildpack for dokku](https://github.com/inket/dokku-buildpack-jekyll3-nginx).  The buildpack basically contains all of the instructions to set up a containerized environment for a jekyll site, including [ruby](https://www.ruby-lang.org/en/downloads/) and jekyll to build it, and an [nginx](https://www.nginx.com/resources/wiki/) web server to host it (two more excellent open source resources).  

After creating a new dokku app and tweaking some dependencies, we are now able to easily deploy changes to the site with a `git push`.  You can quickly add **free** SSL certificates to dokku apps with the [dokku letsencrypt plugin](https://github.com/dokku/dokku-letsencrypt).  

**$20.17, 2 person-days**

We went from “we need a website” to https://planninglabs.nyc live on the web in about 2 days of work by cloning an existing Open Source site and quickly adapting its design and content.  We spent exactly $20.17 for a 1-year .nyc domain registration, and deployed the site to an existing multi-site cloud VPS that costs about $40/month and runs a half dozen other apps and services.  Thanks open source community, and thanks 18F!  
