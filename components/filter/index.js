/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styles from "./filter.module.css";

export default function Filter({ cities, states, geoData, rides, setNearest }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    const filterData = rides.filter((ride) => ride.state === e.target.value);
    setNearest(filterData);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    const filterData = rides.filter((ride) => ride.city === e.target.value);
    setNearest(filterData);
  };
  return (
    <>
      <div
        className={`flex ${styles.filterContainer}`}
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <img src="/filter.png" alt="filter" className={styles.icon} />
        <p className={styles.filterText}>Filter</p>
      </div>
      <div className={filterOpen ? styles.modalOpen : styles.modalClose}>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <p>Filter</p>
          <p
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            X
          </p>
        </div>
        <select onChange={handleStateChange}>
          {states.map((state, indx) => (
            <option key={indx} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select onChange={handleCityChange}>
          {!selectedState
            ? cities.map((city, indx) => (
                <option key={indx} value={city}>
                  {city}
                </option>
              ))
            : geoData[
                geoData.findIndex((p) => p.state === selectedState)
              ]?.cities.map((city, indx) => (
                <option key={indx} value={city}>
                  {city}
                </option>
              ))}
        </select>

        <div
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setNearest(rides)}
        >
          <p>Remove Filters</p>
        </div>
      </div>
    </>
  );
}
