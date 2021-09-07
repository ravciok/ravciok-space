import { HandledRoute, registerPlugin, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';

import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';

export const CommentsScript = 'commentsScript';

const commentsScriptPlugin = (dom: any, route: HandledRoute | undefined): Promise<any> => {
  dom.window.document.getElementById('commentsContainer').innerHTML = `
      <script
        src="https://utteranc.es/client.js"
        repo="ravciok/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script>
    `;

  return Promise.resolve(dom);
};

registerPlugin('postProcessByDom', CommentsScript, commentsScriptPlugin);

setPluginConfig('md', { enableSyntaxHighlighting: true });
setPluginConfig(DisableAngular, 'postProcessByHtml', {
  // removeState: true,
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ravciok-space',
  outDir: './dist/static',
  defaultPostRenderers: [DisableAngular],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog',
      },
      postRenderers: [DisableAngular, CommentsScript],
    },
  },
};
