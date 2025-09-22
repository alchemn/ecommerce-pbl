import { useState, useEffect, useCallback, useRef } from 'react';

export const useAdminData = (fetcher, options = {}) => {
  const { itemsPerPage = 10 } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  
  // Use a ref to store the fetcher function
  const fetcherRef = useRef(fetcher);
  
  // Update the ref when fetcher changes
  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const fetchData = useCallback(async (page = 1, search = '') => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcherRef.current(page, search);
      console.log("API Response:", response);
      
      // Handle the response structure from the backend
      if (response.data && response.data.product) {
        setData(response.data.product);
        setTotalPages(response.data.totalPages || 1);
        setCurrentPage(response.data.currentPage || page);
        setTotalProducts(response.data.totalProducts || response.data.product.length);
      } else {
        // Fallback for other response structures
        const rawData = response.data?.data || response.data?.product || response.data || [];
        if (Array.isArray(rawData)) {
          setData(rawData);
          setTotalPages(Math.ceil(rawData.length / itemsPerPage));
          setTotalProducts(rawData.length);
        } else {
          throw new Error("Fetched data is not an array");
        }
      }
    } catch (err) {
      setError(`Failed to fetch data: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const refetch = useCallback(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  // For pagination, we might want to get data for a specific page
  const getDataForPage = useCallback((page) => {
    fetchData(page);
  }, [fetchData]);

  const currentData = Array.isArray(data) ? data : [];

  return {
    currentData,
    loading,
    error,
    refetch,
    getDataForPage,
    pagination: {
      currentPage,
      totalPages,
      totalProducts,
      paginate,
    },
  };
};
