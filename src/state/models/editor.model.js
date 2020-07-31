export const editor = {
  state: {
    openedFiles: [],
  },
  reducers: {
    openFile(state, fileId) {
      if (state.openedFiles.includes(fileId)) return { ...state };
      return {
        ...state,
        openedFiles: [...state.openedFiles, fileId],
      }
    },
    closeFile(state, fileId) {
      return {
        ...state,
        openedFiles: state.openedFiles.filter(f => f !== fileId),
      }
    },
    closeAllFiles(state) {
      return {
        ...state,
        openedFiles: [],
      }
    }
  },
  effects: {},
};
