import React from "react";
import Filter from "../filter";
import styles from "./navbar.module.css";
import NavButton from "./navButton";

export default function Navbar({
  currentRoute,
  setCurrentRoute,
  states,
  cities,
  geoData,
  rides,
  setNearest,
  nearest,
}) {
  return (
    <div className={`flex ${styles.navbar}`}>
      <div key="navButtons" className={`flex`}>
        <NavButton
          key="Nearest Rides"
          current={currentRoute}
          setCurrentRoute={setCurrentRoute}
          title="Nearest Rides"
        />
        <NavButton
          key="Upcoming Rides"
          current={currentRoute}
          setCurrentRoute={setCurrentRoute}
          title="Upcoming Rides"
        />
        <NavButton
          key="Past Rides"
          current={currentRoute}
          setCurrentRoute={setCurrentRoute}
          title="Past Rides"
        />
      </div>
      <Filter
        key="filters"
        states={states}
        cities={cities}
        geoData={geoData}
        rides={rides}
        setNearest={setNearest}
        nearest={nearest}
      />
    </div>
  );
}
