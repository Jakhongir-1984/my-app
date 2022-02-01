import React from 'react';

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <button className="btn btn-outline-danger">delete</button>
      </td>
    </tr>
  );
};

export default TableItem;