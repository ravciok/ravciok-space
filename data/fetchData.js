require('../env/config');
const fs = require('fs');
const https = require('https');
const readingTime = require('reading-time');

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

        for (const [index, item] of posts.entries()) {
          const stats = readingTime(item.fields.markdown);
          const markdown = item.fields.markdown.replace('---\n', `---\n\ntime: ${stats.text}`);

          fs.writeFile(`./content/blog/${item.fields.slug}.md`, markdown, (err) => {
            if (err) throw err;

            console.log(`${index + 1}/${postsLength} - ${item.fields.slug}`);
          });
        }
      });
    }
  )
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
