import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Tab, Tablist, defaultTheme, Pane, Code, IconButton } from 'evergreen-ui';

const Content = ({ openedFiles, closeFile, files }) => {
  const [selectedFile, selectFile] = useState(null);

  useEffect(() => {
    if (openedFiles && openedFiles.length > 0 && !selectedFile) {
      selectFile(openedFiles[0]);
    }
  }, [openedFiles, selectedFile]);

  const closeOpenedFile = (fileId) => {
    closeFile(fileId);

    if (fileId === selectedFile) {
      console.log(openedFiles.length);
      if (openedFiles.length > 1) {
        console.log(openedFiles[openedFiles.length - 2]);
        
        selectFile(openedFiles[openedFiles.length - 2]);
      } else {
        selectFile(null);
      }
    }
  }

  return (
    <Card
      flex={1}
      border
      marginRight={16}
      marginBottom={16}
      background={defaultTheme.palette.neutral.dark}
    >
      {openedFiles && openedFiles.length > 0 && (
        <>
          <Card
            flex={1}
            background={defaultTheme.palette.neutral.lightest}
            padding={8}
            margin={4}
          >
            <Tablist>
              {openedFiles.map(f => (
                <Tab
                  key={f}
                  id={f}
                  isSelected={f === selectedFile}
                  onSelect={() => selectFile(f)}
                >
                  {files[f].name}
                  <IconButton
                    icon="cross"
                    height={24}
                    appearance="minimal"
                    marginLeft={16}
                    marginRight={-5}
                    onClick={() => closeOpenedFile(f)}
                  />
                </Tab>
              ))}
            </Tablist>
          </Card>
          <Pane
            margin={16}
            height="calc(100vh - 160px)"
            overflow="scroll"
          >
            <Code
              appearance="minimal"
              color={defaultTheme.palette.neutral.lightest}
            >
              <pre>
                {selectedFile && files[selectedFile].content}
              </pre>
            </Code>
          </Pane>
        </>
      )}
    </Card>
  );
}

const mapStateToProps = state => ({
  openedFiles: state.editor.openedFiles,
  files: state.files,
});

const mapDispatchToProps = ({ editor }) => ({
  closeFile: editor.closeFile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);