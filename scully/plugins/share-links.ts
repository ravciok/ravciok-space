import '../../env/config.js';
import { HandledRoute, registerPlugin } from '@scullyio/scully';

export const ShareLinks = 'shareLinks';

const shareLinks = (routes: HandledRoute[] = [], config = {}): Promise<HandledRoute[]> => {
  routes.forEach((route) => {
    if (route.route.includes('/blog/') && route.data) {
      const url: string = `${process.env.HOST}${route.route}`;

      route.data.shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${route.data.title}&via=ravciok`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${route.data.title}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      };
    }
  });

  return Promise.resolve(routes);
};

registerPlugin('routeProcess', ShareLinks, shareLinks);
