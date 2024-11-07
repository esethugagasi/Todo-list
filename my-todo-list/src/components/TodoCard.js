import React from "react";

export default function (props) {
  const { children } = props;
  return (
    <div>
      <li className="TodoItem">
        {children}
        <div className="ActionsContainer">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      </li>
    </div>
  );
}
