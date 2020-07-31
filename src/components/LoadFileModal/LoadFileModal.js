import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Dialog, Pane, FilePicker, Card, Icon, Text } from 'evergreen-ui';
import fileSize from 'filesize';

const LoadFileModal = ({ onClose, loadFile }) => {
  const [file, setFile] = useState(null);

  const loadFileInfo = (files) => {
    if (!files) return false;
    setFile(files[0]);
  }

  const readFile = () => {
    loadFile(file);
    onClose();
  }

  return (
    <Dialog
      isShown
      title="Select file to load"
      onCloseComplete={onClose}
      confirmLabel="Load"
      onConfirm={readFile}
    >
      <Pane>
        <FilePicker
          width="100%"
          marginBottom={16}
          onChange={loadFileInfo}
          placeholder="Select the file here!"
        />
      </Pane>
      {file && (
        <Card
          border
          padding={8}
          display="flex"
        >
          <Pane>
            <Icon
              icon="document"
              size={50}
              color="success"
            />
          </Pane>
          <Pane
            marginLeft={16}
          >
            <Text>Name: <strong>{file.name}</strong></Text>
            <br />
            <Text>Last modified on: <strong>{moment(file.lastModifiedDate).format('LLL')}</strong></Text>
            <br />
            <Text>Size: <strong>{fileSize(file.size)}</strong></Text>
          </Pane>
        </Card>
      )}
    </Dialog>
  );
}

const mapDispatchToProps = ({ files }) => ({
  loadFile: files.loadFile,
});

export default connect(null, mapDispatchToProps)(LoadFileModal);
