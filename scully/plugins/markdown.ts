import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-json.js';
import { setPluginConfig } from '@scullyio/scully';

export const Markdown = 'md';

setPluginConfig(Markdown, { enableSyntaxHighlighting: true });
