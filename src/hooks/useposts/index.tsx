/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Data } from "../../types";

const usePosts = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return [data, loading, error] as [Data[], boolean, Error];
};

export default usePosts;
