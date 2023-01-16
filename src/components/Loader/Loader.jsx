import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
  <ColorRing
    visible={true}
    height="100"
    width="100"
    ariaLabel="blocks-loading"
    wrapperStyle={{ display: 'block', margin: '0 auto' }}
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);

export default Loader;
