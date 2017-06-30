$.getJSON('http://localhost:3000/projects/pipeline.json', (data) => {
  data.forEach((d) => {
    const card = `
      <article class="card usa-width-one-third usa-width-tablet">
        <div class="card-link" data-href="" tabindex="-1">
          <div role="img"
               title=""
               class="card-image-bg"
               style="background-image: url('{{url}}');">
          </div>
          <div class="card-banner">
              <p class="card-tag"></p>
              <a href="" tabindex="-1" class="card-link-tagline"><h3 class="h4">{{name}}</h3></a>
            <p class="card-description">{{description}}</p>
          </div>
          <a href="" class="card-cta link-arrow-right" tabindex="0">
            Read more
            <span class="usa-sr-only">about</span>
          </a>
        </div>
      </article>
    `;
    console.log(Mustache.render(card, d));
    $('.cards').append(Mustache.render(card, {
      url: d['Attachments'] ? d['Attachments'][0].thumbnails.large.url : '',
      name: d['Project name'],
      description: d['Short Description']
    }));
  });
});
