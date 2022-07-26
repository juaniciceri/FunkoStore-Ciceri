import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, price, stock, pictureUrl } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} unidades disponibles!`}</p>
        <Link to={"/detail"}>
          <button className="btn btn-primary">Mirar detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
