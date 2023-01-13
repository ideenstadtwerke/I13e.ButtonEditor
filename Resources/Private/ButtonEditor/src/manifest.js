import manifest from '@neos-project/neos-ui-extensibility';
import ButtonEditor from './ButtonEditor';

manifest('I13e.ButtonEditor:ButtonEditor', {}, (globalRegistry) => {
  const editorsRegistry = globalRegistry.get('inspector').get('editors');

  editorsRegistry.set('I13e.ButtonEditor/ButtonEditor', {
    component: ButtonEditor,
  });
});
