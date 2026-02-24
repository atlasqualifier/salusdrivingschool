import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // On route change, scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return null;
}
