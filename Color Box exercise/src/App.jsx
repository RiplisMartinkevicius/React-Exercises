import "./App.css";
import BoxList from "./BoxList";

const colors = [
  "#E39564",
  "#A8DADC",
  "#F6AE2D",
  "#6D6875",
  "#FF5A5F",
  "#70C1B3",
  "#FFE066",
  "#8338EC",
  "#FFB4A2",
  "#C4C4C4",
  "#4EA8DE",
  "#FCCB00",
  "#DAB785",
  "#FF7096",
  "#7E7F9A",
  "#C82D2B",
  "#FFB549",
  "#A2C523",
  "#1F271B",
  "#C0E0DE",
  "#CE3175",
  "#3A6073",
  "#FF5D73",
  "#FAC8CD",
  "#8B7A6A",
];

function App() {
  return (
    <div>
      <BoxList colors={colors} />
    </div>
  );
}

export default App;
