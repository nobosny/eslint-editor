import { init } from '@rematch/core';
import { files } from './models/files.model';
import { editor } from './models/editor.model';

const store = init({
  models: {
    files,
    editor,
  },
});

export default store;
