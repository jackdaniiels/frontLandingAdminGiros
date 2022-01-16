export const CallToAction1 = ({ data }: { data?: any }) => {
  return (
    <div className="center-content my-5">
      <div className="row container w-100">
        <div className="col-xl-6 center-content">
          <img className="img-fluid" src={`http://localhost:1337` + data?.imagenSlide1?.data?.attributes?.url || ''} alt="" />
        </div>
        <div className="col-xl-6">
          <h1 className="museo-500-reg pt-4">{data?.tituloSlide1}</h1>
          <p className="droid-sans pb-2">{data?.descripcionSlide1} </p>
          <button className="btn-custom">{data?.botonSlide1}</button>
        </div>
      </div>
    </div>
  );
};
