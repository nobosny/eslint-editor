import React from 'react';
import { Popover, Avatar } from 'evergreen-ui';
import UserPopoverContent from '../UserPopoverContent/UserPopoverContent';

const UserAvatar = () => {
  return (
    <Popover content={UserPopoverContent}>
      <Avatar
        isSolid
        name="Nobo Perez"
        size={32}
        cursor="pointer"
      />
    </Popover>
  );
}

export default UserAvatar;
