# NYC Planning Labs' Website

This repo houses the NYC Planning Labs jekyll blog/website.


## Thanks, 18F

The site is a clone of [18f.gsa.gov](https://18f.gsa.gov/), and was modified for use by NYC Planning Labs prior to our launch in June 2017.  As labs is applying 18F's principles at the city agency level, we figured re-using their excellent open-source jekyll site to get us up and running quickly would be a fitting tribute.  So, thanks 18F!

## Installation

Run each of the following steps to get the site up and running.

1. `git clone git@github.com:18F/18f.gsa.gov`
2. `cd 18f.gsa.gov`
3. `bundle install`
4. `./serve`

To dramatically reduce the build time, there are two commands that you can run instead of `./serve`:

* `./serve-fast`: This will eliminate all of the blog posts and the search index, but generates all other pages
* `./serve-blog`: This will eliminate all but the latest three blog posts, but keeps the rest of the site intact.

You should be able to see the site at: http://127.0.0.1:4000/site/

## Deployment

The site can be deployed with a git push to dokku running on our cloud VPS.  We make use of the [dokku jekyll buildpack](https://github.com/inket/dokku-buildpack-jekyll3-nginx), which will stand up a web server (nginx) and other core dependencies (ruby, jekyll, etc) to build and host the site.

Add a new remote:
`git remote add dokku dokku@{ourserverdomain}:planninglabs`

Push the master branch:
`git push dokku master`

Don't forget to push your changes to `origin` too.

TODO: Set up deployment hooks to automatically push `master` to dokku when changes are pushed to github.
