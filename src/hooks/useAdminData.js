import { useState, useEffect, useCallback } from 'react';

export const useAdminData = (fetcher, options = {}) => {
  const { itemsPerPage = 10 } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcher();
      // Handle various possible API response structures
      const rawData = response.data?.data || response.data?.product || response.data || [];
      if (Array.isArray(rawData)) {
        setData(rawData.reverse());
        setTotalPages(Math.ceil(rawData.length / itemsPerPage));
      } else {
        throw new Error("Fetched data is not an array");
      }
    } catch (err) {
      setError(`Failed to fetch data: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [fetcher, itemsPerPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentData,
    loading,
    error,
    refetch: fetchData, // Expose a refetch function
    pagination: {
      currentPage,
      totalPages,
      paginate,
    },
  };
};
