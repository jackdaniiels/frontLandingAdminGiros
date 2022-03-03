
import notFoundImg from '../assets/img/not-found.jpeg';

export const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={notFoundImg} alt="not found" />
    </div>
  )
}

export default NotFoundPage