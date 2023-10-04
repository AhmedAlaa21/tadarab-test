import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type UseAxiosResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useAxios = <T>(
  url: string,
  config?: AxiosRequestConfig
): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url, config);
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, loading, error };
};

export default useAxios;
