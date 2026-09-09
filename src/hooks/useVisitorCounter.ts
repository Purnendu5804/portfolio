import { useState, useEffect } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant local storage visitor counter with random base offset
    try {
      const stored = localStorage.getItem('portfolio_visitor_count');
      const base = stored ? parseInt(stored, 10) : 1248;
      const hasVisited = sessionStorage.getItem('portfolio_session_visited');
      
      let nextCount = base;
      if (!hasVisited) {
        nextCount = base + 1;
        localStorage.setItem('portfolio_visitor_count', nextCount.toString());
        sessionStorage.setItem('portfolio_session_visited', 'true');
      }
      setVisitorCount(nextCount);
    } catch {
      setVisitorCount(1249);
    } finally {
      setLoading(false);
    }
  }, []);

  return { visitorCount, loading };
};

export default useVisitorCounter;
