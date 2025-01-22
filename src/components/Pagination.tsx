import { Pagination, PaginationProps } from 'antd';

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
        className="bg-white border border-gray-300 rounded-md shadow-md p-2"
        itemRender={(page, type, originalElement) => {
          if (type === 'prev') {
            return <a className="text-blue-500 hover:text-blue-700">&lt;</a>;
          }
          if (type === 'next') {
            return <a className="text-blue-500 hover:text-blue-700">&gt;</a>;
          }
          return originalElement;
        }}
      />
    </div>
  );
};

export default PaginationComponent;
