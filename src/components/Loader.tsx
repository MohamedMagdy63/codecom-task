// src/components/Loader.tsx
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <BeatLoader color="#1890ff" />
    </div>
  );
};

export default Loader;
