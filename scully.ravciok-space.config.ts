import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';

const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

setPluginConfig('md', { enableSyntaxHighlighting: true });
setPluginConfig(DisableAngular, 'postProcessByHtml', {
  removeState: true,
});

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
