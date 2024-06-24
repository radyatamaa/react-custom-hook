import { useState, useEffect } from 'react';
import {  cleanAndSortViewSeconds } from "../utils/cleanAndSortViewSeconds";
import {
    getUniqueViewSeconds,
  } from "../api";

const useUniqViewSeconds = () => {
  const [uniqueViewSeconds, setUniqueViewSeconds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchViewSeconds = async () => {
      await getUniqueViewSeconds()
        .then((data) => {
          if (data && Array.isArray(data.data.numbers)) {
            const cleanedViewSeconds = cleanAndSortViewSeconds(data.data.numbers);
            setUniqueViewSeconds(cleanedViewSeconds);
          } else {
            setError('Invalid data structure received');
          }
        })
        .catch((err) => {
            setError((err as Error).message);
        })
        .finally(() => {

        });
    };

    fetchViewSeconds();
  }, []);

  return { uniqueViewSeconds, error };
};

export default useUniqViewSeconds;
