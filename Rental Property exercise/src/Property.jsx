function Property({ name, rating, price }) {
  return (
    <div>
      <h2>
        <li> {name}</li>
      </h2>

      <h3>
        <li> ${price} a night</li>
      </h3>
      <h4>
        <li> {rating}⭐</li>
      </h4>
    </div>
  );
}

export default Property;
