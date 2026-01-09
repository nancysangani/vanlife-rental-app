import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "./../api.js";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);
  const vans = useLoaderData();
  console.log(vans);

  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      return params;
    });
  }

  function clearFilter(key) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete(key);
      return params;
    });
  }

  if (error) {
    return (
      <h2 style={{ marginLeft: "2rem" }}>
        There was an error: {error.message}
      </h2>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => clearFilter("type")}
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
