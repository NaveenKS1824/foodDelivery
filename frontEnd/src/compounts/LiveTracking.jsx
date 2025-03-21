import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import io from "socket.io-client";
import "leaflet/dist/leaflet.css";
import "./liveTracker.css";

const socket = io("http://localhost:3005", { transports: ["websocket"], forceNew: true });

const LiveTracking = ({ orderId }) => {
  const [driverLocation, setDriverLocation] = useState({ lat: 12.9716, lng: 77.5946 });

  useEffect(() => {
    socket.on("connect", () => console.log("WebSocket Connected"));
    socket.on("disconnect", () => console.log("WebSocket Disconnected"));

    socket.on("locationUpdate", ({ orderId: updatedOrderId, lat, lng }) => {
      if (updatedOrderId === orderId) {
        setDriverLocation({ lat, lng });
        console.log(`Location updated: ${lat}, ${lng}`);
      }
    });

    return () => {
      socket.off("locationUpdate");
    };
  }, [orderId]);

  return (
    <div className="live-tracking-container">
      <div className="map-wrapper">
        <MapContainer center={driverLocation} zoom={15} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={driverLocation}>
            <Popup>Delivery Partner's Current Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LiveTracking;
