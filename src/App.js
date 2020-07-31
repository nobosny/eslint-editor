import React from 'react';
import { Pane } from 'evergreen-ui';
import Header from './layout/Header';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';

const App = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      height="100vh"
      flex={1}
    >
      <Header />
      <Pane
        display="flex"
        flex={1}
      >
        <Sidebar />
        <Content />
      </Pane>
    </Pane>
  );
}

export default App;
