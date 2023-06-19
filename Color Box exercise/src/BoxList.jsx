import Box from "./Box";

export default function BoxList({ colors }) {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "5px",
      }}
    >
      {colors.map((color, index) => (
        <Box key={index} color={color} getRandomColor={getRandomColor} />
      ))}
    </div>
  );
}
