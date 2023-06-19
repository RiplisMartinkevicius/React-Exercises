import { useState } from "react";

export default function Box({ color, getRandomColor }) {
  const [backgroundColor, setBackgroundColor] = useState(color);

  const handleClick = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const styles = {
    width: "100px",
    height: "100px",
    backgroundColor: backgroundColor,
  };

  return <div style={styles} onClick={handleClick}></div>;
}
