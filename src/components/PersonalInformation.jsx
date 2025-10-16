import { useEffect, useState } from "react";
import "../css/ProfileCard.css"

export default function PersonalInformation({ user }) {
  /* Personal Information */
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [birth, setBirth] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [dni, setDni] = useState(null);

  useEffect(() => {
    if (!user) return;
    const userName = user.name;
    setName(`${userName.title}  ${userName.first} ${userName.last}`);

    setGender(user.gender);

    const birthInformation = user.dob;

    const dateBirth = new Date(birthInformation.date);
    const formattedDateBirth = dateBirth.toLocaleDateString("es-MX", {
      timeZone: "America/Mexico_City",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setBirth(formattedDateBirth);
    setAge(birthInformation.age);
    setNationality(user.nat);
    const userId = user.id;
    setDni(`${userId.name} ${userId.value}`);
  }, [user]);

  return (
    <div className="profile-card">
      {/* Header */}
      <div className="profile-header">
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-nationality">Nacionalidad: {nationality}</p>
        </div>
      </div>

      {/* Info Section */}
      <h3 className="profile-section-title">INFORMACIÓN PERSONAL</h3>

      <div className="profile-grid">
        <div>
          <span className="label">Género:</span> {gender}
        </div>
        <div>
          <span className="label">Fecha de Nacimiento:</span> {birth}
        </div>
        <div>
          <span className="label">Edad:</span> {age}
        </div>
        <div>
          <span className="label">Identificación:</span> {dni}
        </div>
      </div>
    </div>
  );
}
