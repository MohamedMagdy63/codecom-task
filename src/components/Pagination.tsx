// src/components/Pagination.tsx
import { Pagination, PaginationProps } from 'antd';
import '../assets/styles/Pagination.css'; 

interface PaginationComponentProps extends PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}
const PaginationComponent = ({ current, pageSize, total, onChange }: PaginationComponentProps) => {
  return (
    <div className="flex justify-center mt-6">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        className="bg-white border rounded-md shadow-md px-4 py-2 text-gray-700"
        itemRender={(page, type, originalElement) => {
          if (type === 'prev') {
            return <a className="text-blue-500 hover:text-blue-700">&lt; Previous</a>;
          }
          if (type === 'next') {
            return <a className="text-blue-500 hover:text-blue-700">Next &gt;</a>;
          }
          return originalElement;
        }}
      />
    </div>
  );
};

export default PaginationComponent;
