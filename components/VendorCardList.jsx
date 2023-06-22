import VendorCard from "./VendorCard";
import Pagination from './Pagination';
import { useState, useMemo, useEffect } from 'react'

const VendorCardList = ({ data, handleEdit, handleDelete }) => {
    let PageSize = 6;
  
    const [currentPage, setCurrentPage] = useState(1);
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentTableData = data.slice(firstPageIndex, lastPageIndex);
  
    return <>
      <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {
          currentTableData.map((post) => {
            return <VendorCard
              key={post._id}
              post={post}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          })
        }
  
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  
  }

  export default VendorCardList;