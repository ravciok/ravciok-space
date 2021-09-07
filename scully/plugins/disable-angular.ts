import { setPluginConfig } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';

setPluginConfig(DisableAngular, 'postProcessByHtml', { removeState: true });

export { DisableAngular };
