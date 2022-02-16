import React from 'react';
import classes from './MyModal.modal'

function MyModal(props) {
  return (
    <div className={classes.MyModal}>
      <div className={classes.myModalContent}></div>
    </div>
  );
}

export default MyModal;