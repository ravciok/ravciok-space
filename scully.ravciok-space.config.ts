import { ScullyConfig } from '@scullyio/scully';
import { ChangeTitle, CommentsScript, DisableAngular } from './scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ravciok-space',
  outDir: './dist/static',
  defaultPostRenderers: [DisableAngular, ChangeTitle],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog',
      },
      postRenderers: [DisableAngular, ChangeTitle, CommentsScript],
    },
  },
};
