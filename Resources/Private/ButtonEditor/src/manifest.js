import manifest from '@neos-project/neos-ui-extensibility';

import ButtonEditor from './ButtonEditor';

manifest('I13e.ButtonEditor:ButtonEditor', {}, (globalRegistry, { frontendConfiguration }) => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');
	const buttonEditorConfig = frontendConfiguration['I13e.ButtonEditor:ButtonEditor'];

	editorsRegistry.set('I13e.ButtonEditor/ButtonEditor', {
		component: class extends ButtonEditor {
			getConfig() {
				return buttonEditorConfig;
			}
		}
	});
});
