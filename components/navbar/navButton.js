import React from "react";
import styles from "./navButton.module.css";

export default function NavButton({ title, current, setCurrentRoute }) {
  const isActive = current === title;
  console.log(current);
  return (
    <div
      className={isActive ? styles.btnActive : styles.btnOuter}
      onClick={() => setCurrentRoute(title)}
    >
      <p key={title} className={styles.btnText}>
        {title}
      </p>
    </div>
  );
}
