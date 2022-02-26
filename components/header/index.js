import axios from "axios";
import React, { useEffect } from "react";
import styles from "./header.module.css";

export default function Header({ user }) {
  return (
    <div className={`flex ${styles.header}`}>
      <p className={styles.logo}>Edvora</p>
      <div className={`flex ${styles.userPart}`}>
        <p className={styles.userName}>{user.name}</p>
        <img
          src={user.url}
          alt="profile picture"
          className={styles.profilePicture}
        />
      </div>
    </div>
  );
}
