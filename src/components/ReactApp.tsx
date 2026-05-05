import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';

export default function ReactApp() {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
