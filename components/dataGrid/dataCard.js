/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./dataCard.module.css";

export default function DataCard({ ride }) {
  return (
    <div className={`flex ${styles.rideCard}`}>
      <div key="daftd" className={`flex ${styles.dataCardLeft}`}>
        <img
          key="image-data"
          src={ride["map_url"]}
          className={styles.mapImage}
          alt="map"
        />
        <div key="datacardd">
          <p key="datacardtext">
            Ride Id : <span key="datacardd">{ride.id}</span>
          </p>
          <p key="datacarddd">
            Origin Station :{" "}
            <span key="datacardd">{ride.origin_station_code}</span>
          </p>
          <p key="datacarddd">
            Station Path:{" "}
            <span key="datacardd">[ {ride.station_path.toString()} ]</span>
          </p>
          <p key="datacarddddd">
            Date: <span key="datacardd">{ride.date}</span>
          </p>
          <p key="datacarddddddd">
            Distance: <span key="datacardd">{ride.distance}</span>
          </p>
        </div>
      </div>
      <div key="datacardd" className={`flex ${styles.cityState}`}>
        <div key="datacardd" className={styles.geoContainer}>
          <p key="datacardd" className={styles.geoText}>
            {ride.city}
          </p>
        </div>
        <div key="datacardd" className={styles.geoContainer}>
          <p key="datacardd" className={styles.geoText}>
            {ride.state}
          </p>
        </div>
      </div>
    </div>
  );
}
