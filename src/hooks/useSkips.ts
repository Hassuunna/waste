import { useEffect, useState } from 'react';
import type { ISkip } from '../types';

export function useSkips(postcode: string, area: string) {
  const [data, setData] = useState<ISkip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch skips');
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [postcode, area]);

  return { data, loading, error };
}
