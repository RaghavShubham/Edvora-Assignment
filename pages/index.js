import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import DataGrid from "../components/dataGrid";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [user, setUser] = useState({});
  const [currentRoute, setCurrentRoute] = useState("Nearest Rides");
  const [rides, setRides] = useState([]);
  const [nearestRides, setNearest] = useState([]);
  const [upcomingRides, setUpcoming] = useState([]);
  const [pastRides, setPast] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [geoData, setGeoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://assessment.api.vweb.app/user")
      .then((res) => {
        setUser(res.data);
        let nearest = [];
        axios
          .get("https://assessment.api.vweb.app/rides")
          .then((response) => {
            response.data.map((ride) => {
              let distance = ride.station_path.reduce(function (prev, curr) {
                return Math.abs(curr - res.data.station_code) <
                  Math.abs(prev - res.data.station_code)
                  ? curr
                  : prev;
              });
              nearest.push({
                distance: Math.abs(distance - res.data.station_code),
                ...ride,
              });
            });
            nearest.sort((a, b) => a.distance - b.distance);
            const upcoming = response.data.filter(
              (ride) => new Date(ride.date) > new Date()
            );
            const past = response.data.filter(
              (ride) => new Date(ride.date) < new Date()
            );
            setUpcoming(upcoming);
            setPast(past);
            setNearest(nearest);
            setRides(nearest);

            const uniqueStates = [
              ...new Set(response.data.map((item) => item.state)),
            ];
            const uniqueCities = [
              ...new Set(response.data.map((item) => item.city)),
            ];
            setStates(uniqueStates);
            setCities(uniqueCities);

            const geoData = [];
            uniqueStates.map((state) => {
              let cities = [];
              response.data.map((ride) => {
                if (ride.state === state) {
                  !cities.includes(ride.city) ? cities.push(ride.city) : null;
                }
              });
              geoData.push({
                state: state,
                cities: cities,
              });
            });
            setGeoData(geoData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    return () => {
      setCurrentRoute("Nearest Rides");
    };
  }, []);

  return (
    <div className="home-container">
      <Head key="title">
        <title key="edvora">Edvora</title>
      </Head>
      <Header key="header" user={user} />
      <Navbar
        key="navbar"
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        states={states}
        cities={cities}
        geoData={geoData}
        rides={rides}
        setNearest={setNearest}
        nearest={nearestRides}
      />
      <DataGrid
        key="dataGrid"
        rides={
          currentRoute === "Nearest Rides"
            ? nearestRides
            : currentRoute === "Upcoming Rides"
            ? upcomingRides
            : pastRides
        }
      />
    </div>
  );
}
