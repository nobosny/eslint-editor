import React from 'react';
import { Pane } from 'evergreen-ui';
import SideToolbar from '../../components/SideToolbar';
import FileList from '../../components/FileList';

const Sidebar = () => {
  return (
    <Pane
      width={350}
      display="flex"
      flexDirection="column"
      paddingLeft={16}
      paddingRight={16}
    >
      <SideToolbar />
      <FileList />
    </Pane>
  );
}

export default Sidebar;