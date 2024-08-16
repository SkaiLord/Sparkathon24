import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MyMap(props: any) {
  const { position, zoom, data } = props;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="w-full h-80"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item: any, index: number) => (
        <Marker position={item.position} key={index}>
          <Popup className="w-min">
            {item.name}
            <br /> Status: {item.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
