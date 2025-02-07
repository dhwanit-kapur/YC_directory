import React from "react";
import "../globals.css";

export default function GlobalLoading(): React.ReactNode {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #ccc",
    borderTopColor: "#1e90ff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#555",
  },
};
