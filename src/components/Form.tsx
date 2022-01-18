export const Form = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Documento</label>
          <input type="test" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nombre</label>
          <input type="test" className="form-control" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button disabled={false} className="btn-custom mb-2">
            Enviar
          </button> 
        </div>
      </form>
    </>
  );
};
