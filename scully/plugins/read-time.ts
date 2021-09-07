import { setPluginConfig } from '@scullyio/scully';
import { timeToRead } from 'scully-plugin-time-to-read';

setPluginConfig(timeToRead, { path: '/blog' });

export { timeToRead };
