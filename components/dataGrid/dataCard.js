import React from "react";
import styles from "./dataCard.module.css";

export default function DataCard({ ride }) {
  return (
    <div className={`flex ${styles.rideCard}`}>
      <div className={`flex ${styles.dataCardLeft}`}>
        <img src={ride["map_url"]} className={styles.mapImage} alt="map" />
        <div>
          <p>
            Ride Id : <span>{ride.id}</span>
          </p>
          <p>
            Origin Station : <span>{ride.origin_station_code}</span>
          </p>
          <p>
            Station Path: <span>[ {ride.station_path.toString()} ]</span>
          </p>
          <p>
            Date: <span>{ride.date}</span>
          </p>
          <p>
            Distance: <span>{ride.distance}</span>
          </p>
        </div>
      </div>
      <div className={`flex ${styles.cityState}`}>
        <div className={styles.geoContainer}>
          <p className={styles.geoText}>{ride.city}</p>
        </div>
        <div className={styles.geoContainer}>
          <p className={styles.geoText}>{ride.state}</p>
        </div>
      </div>
    </div>
  );
}
