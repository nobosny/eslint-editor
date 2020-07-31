import React from 'react';
import { Pane, IconButton } from 'evergreen-ui';

const UserPopoverContent = ({ close }) => {
  return (
    <Pane
      width={320}
      height={320}
      padding={16}
    >
      User info here
      <IconButton
        marginBottom={16}
        appearance="minimal"
        icon="cross"
        onClick={close}
      />
    </Pane>
  );
}

export default UserPopoverContent;