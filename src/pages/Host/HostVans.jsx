import { Link } from "react-router-dom";
import React from "react";
export default function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/host/hostvans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);
  const hostVansElements = hostVans.map((hostVan) => (
    <Link
      to={`/host/hostvans/${hostVan.id}`}
      key={hostVan.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={hostVan.id}>
        <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
        <div className="host-van-info">
          <h3>{hostVan.name}</h3>
          <p>${hostVan.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          <section>{hostVansElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
