import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/plugins/show-language/prism-show-language.js';
import { setPluginConfig } from '@scullyio/scully';

export const Markdown = 'md';

setPluginConfig(Markdown, { enableSyntaxHighlighting: true });
