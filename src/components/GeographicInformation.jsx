import { useEffect, useState } from "react";
import "../css/GeoCard.css"

export default function GeographicInformation({ user }) {
  /* Geographic Information */
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  });

  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const [timeZone, setTimeZone] = useState({
    offset: "",
    description: "",
  });
  useEffect(() => {
    if (!user) return;
    const location = user.location;
    const street = `${location.street.name} #${location.street.number}`;
    const { city, state, country, postcode } = location;
    setAddress({
      street,
      city,
      state,
      country,
      postcode,
    });

    setCoordinates(location.coordinates);

    setTimeZone(location.timezone);
  }, [user]);

  return (
    <div className="geo-card">
      <h3 className="geo-title">INFORMACIÓN GEOGRÁFICA</h3>

      <div className="geo-grid">
        <div>
          <span className="label">Calle:</span> {address.street}
        </div>
        <div>
          <span className="label">Código Postal:</span> {address.postcode}
        </div>
        <div>
          <span className="label">Ciudad:</span> {address.city}
        </div>
        <div>
          <span className="label">País:</span> {address.country}
        </div>
        <div className="full-row">
          <span className="label">Coordenadas:</span> {coordinates.latitude},{" "}
          {coordinates.longitude}
        </div>
        <div className="full-row">
          <span className="label">Zona Horaria:</span> {timeZone.description},{" "}
          {timeZone.offset}
        </div>
      </div>
    </div>
  );
}
