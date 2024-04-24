import { Spinner } from "react-bootstrap";
import "./index.css";

const AppSpinner = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" />
      <div style={{ marginTop: "1rem" }}>Cargando...</div>
    </div>
  );
};

export default AppSpinner;
