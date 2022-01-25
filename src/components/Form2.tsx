import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { postForm } from "../services/postForm";

const initialState = {
  name: "",
  email: "",
  document: "",
  phone: "",
  acceptTerms: true,
};

let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Form2 = () => {
  const [formValues, setFormValues] = useState(initialState);

  const { name, email, document, acceptTerms, phone } = formValues;
  const [showAlertOk, setShowAlertOk] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [sendOk, setSendOk] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postForm(formValues, 2)
      .then((res) => {
        setSendOk(true);
        setShowAlertOk(true);
      })
      .catch((err) => {
        setSendOk(false);
        setShowAlertError(true);
      });
  };

  const handleInputChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSend = () => {
    if (sendOk) {
      setShowAlertOk(false);
      setFormValues(initialState);
      return;
    }
    setShowAlertError(false);
  };

  const validateForm = (): boolean => {
    return (
      name.length > 3 &&
      email.length > 5 &&
      regexEmail.test(email) &&
      document.length > 4 &&
      phone.length > 4 &&
      acceptTerms
    );
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nombre</label>
          <input
            type="test"
            className="form-control"
            name="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onInput={validateForm}
            onChange={(e) => handleInputChange(e)}
          />
          {name.length >= 1 && name.length < 3 && (
            <small className="form-text text-muted">
              Nombre es un campo obligatorio.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Documento</label>
          <input
            type="test"
            className="form-control"
            name="document"
            placeholder="Ingresa tu documento"
            value={document}
            onInput={validateForm}
            onChange={(e) => handleInputChange(e)}
          />
          {document.length >= 1 && document.length < 5 && (
            <small className="form-text text-muted">
              Documento es un campo obligatorio.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Ingresa tu email"
            value={email}
            onInput={validateForm}
            onChange={(e) => handleInputChange(e)}
          />
          {regexEmail.test(email) && email.length >= 1 && email.length < 5 && (
            <small className="form-text text-muted">
              Email es un campo obligatorio.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Teléfono</label>
          <input
            type="test"
            className="form-control"
            name="phone"
            placeholder="Ingresa tu teléfono"
            value={phone}
            onInput={validateForm}
            onChange={(e) => handleInputChange(e)}
          />
          {phone.length >= 1 && phone.length < 9 && (
            <small className="form-text text-muted">
              Teléfono es un campo obligatorio.
            </small>
          )}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            type="submit"
            disabled={validateForm() ? false : true}
            className="btn-custom mb-2"
          >
            <span className="mx-5">Enviar</span>
          </button>
        </div>
      </form>
      {showAlertOk && (
        <SweetAlert
          success
          title="Formulario enviado."
          onConfirm={handleFormSend}
        ></SweetAlert>
      )}
      {showAlertError && (
        <SweetAlert
          error
          title="No se pudo enviar el formulario."
          onConfirm={handleFormSend}
        ></SweetAlert>
      )}
    </>
  );
};
