import React from 'react';
import MyButton from './UI/button/MyButton';

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <MyButton>Delete</MyButton>
      </td>
    </tr>
  );
};

export default TableItem;