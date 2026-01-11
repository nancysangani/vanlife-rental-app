import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "./../../api.js";
import { requireAuth } from "./../../utils.js";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();
  const hostVansElements = hostVans.map((hostVan) => (
    <Link to={hostVan.id} key={hostVan.id} className="host-van-link-wrapper">
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
        <section>{hostVansElements}</section>
      </div>
    </section>
  );
}
