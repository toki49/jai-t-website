import { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import DataTable from '../components/DataTable';
import Taxonomy from './Taxonomy';
import { parseCSVData } from '../utils/csvParser';
import './JAITDatabase.css';

function JAITDatabase() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'taxonomy'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    categories: [],
    domain: [],
    state: []
  });

  useEffect(() => {
    // Load CSV data
    fetch('/jait-data.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(csvText => {
        const parsedData = parseCSVData(csvText);
        setData(parsedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading CSV data:', error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [filterType]: newValues
      };
    });
  };

  const handleDownload = (dataToDownload) => {
    // Convert data to CSV format
    const headers = ['Name', 'City', 'State','Domain', 'Category', 'Last Searched'];
    const csvRows = [
      headers.join(','),
      ...dataToDownload.map(row => [
        `"${(row.name || '').replace(/"/g, '""')}"`,
        `"${(row.city || '').replace(/"/g, '""')}"`,
        `"${(row.state || '').replace(/"/g, '""')}"`,
        `"${(row.domain || '').replace(/"/g, '""')}"`,
        `"${(row.category || '').replace(/"/g, '""')}"`,
        `"${(row.lastUpdated || '').replace(/"/g, '""')}"`
      ].join(','))
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'jai-t-database.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get view mode from URL - update when location changes
  useEffect(() => {
    if (location.pathname === '/jai-t/taxonomy') {
      setViewMode('taxonomy');
    } else {
      setViewMode('table');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setViewMode(tab);
    if (tab === 'taxonomy') {
      navigate('/jai-t/taxonomy');
    } else {
      navigate('/jai-t');
    }
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: "Technology's Name",
      cell: info => {
        const name = info.getValue();
        const link = info.row.original.link;
        if (link) {
          return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="table-link-name">
              <strong>{name}</strong>
            </a>
          );
        }
        return <strong>{name}</strong>;
      },
    },
    {
      accessorKey: 'city',
      header: 'City',
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
    {
      accessorKey: 'domain',
      header: 'Domain',
      cell: info => {
        const domain = info.getValue();
        if (!domain || domain === 'N/A') return '-';
        return (
          <span className={`domain-badge domain-${domain.toLowerCase().replace(/\s+/g, '-')}`}>
            {domain}
          </span>
        );
      },
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'lastUpdated',
      header: 'Last Updated',
      cell: info => {
        const date = info.getValue();
        if (!date) return '-';
        // Handle MM/DD/YYYY format
        if (date.includes('/')) {
          const dateParts = date.split('/');
          if (dateParts.length === 3) {
            const month = dateParts[0].padStart(2, '0');
            const day = dateParts[1].padStart(2, '0');
            const year = dateParts[2];
            const dateObj = new Date(`${year}-${month}-${day}`);
            return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          }
        }
        // Handle YYYY-MM-DD format
        const dateObj = new Date(date);
        if (!isNaN(dateObj.getTime())) {
          return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
        return date;
      },
    },
  ], []);

  if (loading) {
    return (
      <div className="jait-database">
        <div className="loading-container">
          <p>Loading database...</p>
        </div>
      </div>
    );
  }

  if (data.length === 0 && !loading) {
    return (
      <div className="jait-database">
        <div className="loading-container">
          <p>No data found. Please check that jait-data.csv is in the public folder.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Check the browser console for error messages.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="jait-database">
      <div className="jait-tabs">
        <button
          className={`jait-tab ${viewMode === 'table' ? 'active' : ''}`}
          onClick={() => handleTabChange('table')}
        >
          JAI-T Table
        </button>
        <button
          className={`jait-tab ${viewMode === 'taxonomy' ? 'active' : ''}`}
          onClick={() => handleTabChange('taxonomy')}
        >
          Taxonomy
        </button>
      </div>

      {viewMode === 'taxonomy' ? (
        <Taxonomy />
      ) : (
        <div className="main-content">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          <DataTable 
            data={data} 
            columns={columns} 
            filters={filters}
            onDownload={handleDownload}
          />
        </div>
      )}
    </div>
  );
}

export default JAITDatabase;
