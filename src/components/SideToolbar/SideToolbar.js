import React, { useState } from 'react';
import { Pane, Button } from 'evergreen-ui';
import LoadFileModal from '../LoadFileModal/LoadFileModal';

const SideToolbar = (props) => {
  const [showLoadModal, setLoadModalVisibility] = useState(false);

  const openLoadModal = () => setLoadModalVisibility(true);
  const closeLoadModal = () => setLoadModalVisibility(false);
  

  return (
    <Pane>
      <Button onClick={openLoadModal}>
        Load file
      </Button>

      {showLoadModal && (
        <LoadFileModal onClose={closeLoadModal} />
      )}
    </Pane>
  );
}

export default SideToolbar;
