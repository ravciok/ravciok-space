import { HandledRoute, registerPlugin } from '@scullyio/scully';

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
