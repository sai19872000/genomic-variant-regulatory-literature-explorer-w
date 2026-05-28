import React from 'react';
import { Views } from './views';

export const App = () => {
  return (
    <div className="aura-dark-mode" style={{
      backgroundColor: '#121212',
      color: '#e0e0e0',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #333' }}>
        <h1>Genora</h1>
        <p>Genomic Data Explorer</p>
      </header>
      
      <main style={{ padding: '2rem' }}>
        <Views />
      </main>
      
      <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #333', marginTop: 'auto' }}>
        <p>&copy; 2024 Genora</p>
      </footer>
    </div>
  );
};
