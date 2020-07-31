import md5 from 'blueimp-md5';
import { readFileAsText } from "../../utils/file.utilities";

export const files = {
  state: {},
  reducers: {
    add(state, file) {
      return {
        ...state,
        [file.id]: file,
      };
    },
  },
  effects: (dispatch) => ({
    async loadFile(file) {
      if (!file) return false;

      const fileModel = {
        id: md5(file.name),
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        content: null,
      };

      try {
        const content = await readFileAsText(file);
        fileModel.content = content;
        dispatch.files.add(fileModel);
      } catch (error) {
        console.error(error);
      }
    }
  }),
};
