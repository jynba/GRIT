import type { DefaultTheme } from 'vitepress';
import resources from '../../resources/sidebar';
import timeline from '../../timeline/sidebar';
import fe from '../../fe/sidebar';
import cs from '../../cs/sidebar';

export const sidebar: DefaultTheme.Config['sidebar'] = {
	'/resources': resources,
	'/fe': fe,
	'/cs': cs,
	// '/lang': lang,
	'/timeline': timeline,
};
