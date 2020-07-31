import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import UserAvatar from '../../components/UserAvatar';

const Header = () => {
  return (
    <Pane
      height={60}
      display="flex"
      alignItems="center"
      paddingLeft={16}
      paddingRight={16}
      justifyContent="space-between"
    >
      <Pane
        display="flex"
        alignItems="center"
        width={260}
      >
        <Heading
          size={700}
        >
          &lt; ESLint Editor /&gt;
        </Heading>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
      >
        <UserAvatar />
      </Pane>
    </Pane>
  );
}

export default Header;