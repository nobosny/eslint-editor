import React from 'react';
import { Pane, Text } from 'evergreen-ui';

const App = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100%"
    >
      <Pane
        height={60}
        display="flex"
        alignItems="center"
        background="#133C55"
      >
        <Text>Header</Text>
      </Pane>
      <Pane
        display="flex"
        flex={1}
        flexDirection="row"
      >
        <Pane
          width={450}
          background="#84D2F6"
        >
          <Text>Project</Text>
        </Pane>
        <Pane
          flex={1}
          background="#91E5F6"
        >
          <Text>Code</Text>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
