import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export const Form = () => {
  const [formValues, setFromValues] = useState({
    name: "",
    email: "",
    document: "",
    acceptTerms: false,
  });

  const { name, email, document, acceptTerms } = formValues;
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit", e);
    setShowAlert(true);
  };

  const handleInputChange = (e: any) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value });
    console.log("handleInputChange", formValues);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Documento</label>
          <input
            type="test"
            className="form-control"
            name="document"
            value={document}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nombre</label>
          <input
            type="test"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button type="submit" disabled={false} className="btn-custom mb-2">
            Enviar
          </button>
        </div>
      </form>
      {showAlert && (
        <SweetAlert
          success
          title="Formulario enviado."
          onConfirm={() => setShowAlert(false)}
        ></SweetAlert>
      )}
    </>
  );
};
