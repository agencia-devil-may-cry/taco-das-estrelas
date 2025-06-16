import { Scene } from "phaser";
import Map, { LatlngExpression } from "leaflet";

export class Maps extends Scene {
  map: Map.Map = Map.map("game-container").setView([0, 0], 18);
  constructor() {
    super({ key: "Maps" });
  }

  create() {
    Map.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {}
    ).addTo(this.map);

    const userMaker = Map.cicleMarker([0, 0], {
      radius: 10,
      fillColor: "3388ff",
      color: "000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    }).addTo(this.map);

    const pathCoordinates: LatlngExpression[] = [];

    const pathline = Map.polyline(pathCoordinates, {
      color: "ff0000",
      weight: 3,
      opacity: 0.7,
    }).addTo(this.map);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          userMaker.setLatLng([latitude, longitude]);
          pathCoords.push([latitude, longitude] as LatlngExpression);
          pathline.setLatLngs(pathCoords);
          this.map.setView([latitude, longitude], 18, {
            animate: true,
            duration: 1,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        options
      );
    }
  }
}
