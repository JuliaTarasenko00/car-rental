import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{ display: 'block', margin: '40vh auto' }}
      wrapperClass="blocks-wrapper"
    />
  );
};

export default Loader;
