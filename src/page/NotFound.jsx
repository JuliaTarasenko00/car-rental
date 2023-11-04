import img from '../img/error-404.webp';
const NotFound = () => {
  return (
    <img
      src={img}
      alt="Page Not Found"
      loading="lazy"
      width="500"
      height="500"
      style={{ margin: '0 auto' }}
    />
  );
};

export default NotFound;
