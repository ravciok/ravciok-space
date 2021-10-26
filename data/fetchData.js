const fs = require('fs');
const https = require('https');
const colors = require('colors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

fs.mkdir('content/blog', { recursive: true }, () => {});

https
  .get(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?content_type=section`,
    {
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
      },
    },
    (resp) => {
      let body = '';

      resp.on('data', (chunk) => {
        body += chunk;
      });

      resp.on('end', () => {
        const posts = JSON.parse(body).items;
        const postsLength = posts.length;

        console.log(`fetched ${postsLength} blog posts:`);

        posts.reduce(
          (acc, item, index) =>
            acc.then(
              () =>
                new Promise((resolve, reject) => {
                  fs.writeFile(`./content/blog/${item.fields.slug}.md`, item.fields.markdown, (err) => {
                    if (err) {
                      console.log('\u2718'.red, `${index + 1}/${postsLength} - ${item.fields.slug}`);

                      resolve(err);
                      return;
                    }

                    console.log('\u2714'.green, `${index + 1}/${postsLength} - ${item.fields.slug}`);

                    resolve();
                  });
                })
            ),
          Promise.resolve()
        );
      });
    }
  )
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
