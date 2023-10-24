import { useEffect, useState } from "react";
import { Product } from "../interface/products";
import { baseUrl } from "../util/api";

export const useGetData = (value: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const resp = await fetch(`${baseUrl}/api/items?q=${value}`);
      const data = await resp.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { products, isLoading, error, getData, setProducts };
};
