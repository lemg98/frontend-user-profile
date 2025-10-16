import { useEffect, useState } from "react";
import "../css/ContactCard.css";

export default function ContactInformation({ user }) {
  /* Contact Information */
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cell, setCell] = useState(null);

  useEffect(() => {
    if (!user) return;
    setEmail(user.email);
    setPhone(user.phone);
    setCell(user.cell);
  }, [user]);

  return (
    <div className="contact-card">
      <h3 className="contact-title">INFORMACIÓN DE CONTACTO</h3>

      <div className="contact-grid">
        <div>
          <span className="label">Correo Electrónico:</span> {email}
        </div>
        <div>
          <span className="label">Teléfono:</span> {phone}
        </div>
        <div>
          <span className="label">Celular:</span> {cell}
        </div>
      </div>
    </div>
  );
}
