import React, { useState, useRef } from "react";
import "./card.css";
const Card = ({ color, reference }) => {
  console.log(reference);
  const [styles, setStyles] = useState({
    "--clr": color,
    "--x": MouseEvent.pageX,
    "--y": MouseEvent.pageY,
  });
  const targetRef = useRef(reference);

  const handleOnMouseMove = (event) => {
    const target = targetRef;
    console.log(target);
    if (target) {
      const left = target.current.current.offsetLeft;
      const top = target.current.current.offsetTop;
      const x = event.clientX - left;
      const y = event.clientY - top;

      const newStyles = {
        "--clr": color,
        "--x": x + "px",
        "--y": y + "px",
      };

      setStyles(newStyles);
    }
  };
  return (
    <div
      className="card"
      style={styles}
      onMouseMove={handleOnMouseMove}
      ref={reference}
    ></div>
  );
};

export default Card;
