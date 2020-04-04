import React from "react";
import classnames from "classnames";

const Letter = props => {
  return (
    <div
      className={classnames({
        letterWrapper: true,
        isEmptyLetter: props.item === " " ? true : false
      })}
    >
      <span className="letter">{props.item}</span>
    </div>
  );
};

export default Letter;
