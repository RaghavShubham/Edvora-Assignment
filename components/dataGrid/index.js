import React from "react";
import DataCard from "./dataCard";
import styles from "./dataGrid.module.css";

export default function DataGrid({ rides }) {
  return (
    <div className={styles.dataContainer}>
      {rides?.map((ride, index) => (
        <DataCard key={index} ride={ride} />
      ))}
    </div>
  );
}
