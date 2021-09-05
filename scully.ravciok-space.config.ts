import { HandledRoute, registerPlugin, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';

const { DisableAngular } = require('scully-plugin-disable-angular');

function addBlogComments(dom: any, route: HandledRoute | undefined): Promise<any> {
  if (route?.route.match(/^\/blog\/.+/)) {
    dom.window.document.getElementById('commentsContainer').innerHTML = `
      <script
        src="https://utteranc.es/client.js"
        repo="ravciok/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script>`;
  }

  return Promise.resolve(dom);
}

registerPlugin('postProcessByDom', 'commentsScript', addBlogComments);

setPluginConfig('md', { enableSyntaxHighlighting: true });
setPluginConfig(DisableAngular, 'postProcessByHtml', {
  removeState: true,
});

const postRenderers = [DisableAngular, 'commentsScript'];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ravciok-space',
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog',
      },
      postRenderers: postRenderers,
    },
  },
};
