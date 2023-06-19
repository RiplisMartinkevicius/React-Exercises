import Property from "./Property";
import "./styles.css";

function PropertyList({ properties }) {
  return (
    <div className="flex-container">
      {properties.map((i) => (
        <Property key={i.id} name={i.name} rating={i.rating} price={i.price} />
      ))}
    </div>
  );
}

export default PropertyList;
