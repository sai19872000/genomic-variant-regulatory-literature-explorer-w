import React, { useState } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // TODO: Implement search logic against the API routes
  };

  return (
    <div className="search-component" style={{ marginBottom: '2rem' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search genes, variants, etc..."
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #444',
            backgroundColor: '#222',
            color: '#fff',
            flex: 1
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export const Views = () => {
  return (
    <div className="views-container">
      <SearchComponent />
      
      <div className="content-area" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <section className="card" style={{ padding: '1.5rem', backgroundColor: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
          <h2>ClinVar Data</h2>
          <p>Integration pending...</p>
        </section>

        <section className="card" style={{ padding: '1.5rem', backgroundColor: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
          <h2>gnomAD Data</h2>
          <p>Integration pending...</p>
        </section>

        <section className="card" style={{ padding: '1.5rem', backgroundColor: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
          <h2>Gemini Analysis</h2>
          <p>Integration pending...</p>
        </section>
      </div>
    </div>
  );
};
