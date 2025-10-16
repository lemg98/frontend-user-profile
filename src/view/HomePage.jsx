import { useEffect, useState } from "react";
import axios from "axios";
import PersonalInformation from "../components/PersonalInformation";
import GeographicInformation from "../components/GeographicInformation";
import ContactInformation from "../components/ContactInformation";
import "../css/UserProfile.css";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  /* Picture Information */
  const [picture, setPicture] = useState({
    smallPicture: null,
    mediumPicture: null,
  });

  /* Fetch data */
  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        // Delay Artificial
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await axios.get("https://randomuser.me/api/");
        if (!isMounted) return;

        const fetchedUser = response.data.results[0];
        setUser(fetchedUser);
        getPicture(fetchedUser);

        toast.success("Datos cargados correctamente.");
      } catch (error) {
        if (!isMounted) return;
        toast.error("Ocurrió un error al cargar los datos del usuario.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);

  function getPicture(user) {
    setPicture(user.picture);
  }

  return (
    <div className="user-profile">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Cargando información...</p>
        </div>
      ) : (
        <>
          {picture?.medium && (
            <img
              src={picture.medium}
              alt="Foto de usuario"
              className="user-avatar"
            />
          )}

          <div className="user-sections">
            <PersonalInformation user={user} />
            <GeographicInformation user={user} />
            <ContactInformation user={user} />
          </div>
        </>
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default HomePage;
