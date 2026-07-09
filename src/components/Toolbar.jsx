export function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onSelectFilter(filter)}
            style={{
              padding: '8px 16px',
              backgroundColor: selected === filter ? 'black' : 'lightgray',
              color: selected === filter ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
              fontWeight: selected === filter ? 'bold' : 'normal'
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    ); 
}