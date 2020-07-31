import React from 'react';
import { connect } from 'react-redux';
import { Menu, Card, Text, defaultTheme } from 'evergreen-ui';
import fileSize from 'filesize';
import { clearSelection } from '../../utils/general.utilities';

const FileList = ({ files, openFile }) => {
  const filesArray = Object.values(files);

  const selectFile = () => {

  }

  const onDoubleClick = (fileId) => {
    clearSelection();
    
    openFile(fileId);
  }

  return (
    <Card
      border
      marginTop={16}
      minHeight={300}
      maxHeight={500}
      overflow="scroll"
    >
      {filesArray && filesArray.length > 0 && (
        <Menu>
          {filesArray.map(f => (
            <Menu.Item
              icon="document"
              key={f.id}
              onDoubleClick={() => onDoubleClick(f.id)}
              secondaryText={(
                <Text
                  size={300}
                  color={defaultTheme.scales.neutral.N7}
                >
                  {fileSize(f.size)}
                </Text>
              )}
            >
              {f.name}
            </Menu.Item>
          ))}
        </Menu>
      )}
    </Card>
  );
}

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = ({ editor }) => ({
  openFile: editor.openFile,
});

export default connect(mapStateToProps, mapDispatchToProps)(FileList);
