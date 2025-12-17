import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import DataTable from '../components/DataTable';
import Taxonomy from './Taxonomy';
import Methodology from './Methodology';
import Cite from './Cite';
import DownloadModal from '../components/DownloadModal';
import Insights from './Insights';
import { parseCSVData } from '../utils/csvParser';
import './JAITDatabase.css';

const categoryDefinitions = {
  "Back End Administration": "Supports internal operations (ex: data management, documentation).",
  "Detection": "Identifies objects or events (ex: gunshot detection, license plate recognition).",
  "Forensic Analysis": "Analyzes evidence (ex: images, biometrics).",
  "Front End Support": "Directly interacts with the public (ex: chatbots, online portals).",
  "Prediction": "Forecasts risk, hotspots, recidivism, or resource demands.",
  "Surveillance": "Real-time monitoring, video analysis, or sensor-based tracking.",
  "N/A" : "At the time of search, research assistants found no AI powered tools.",
};

function JAITDatabase() {
  const location = useLocation();
  const [viewMode, setViewMode] = useState('table');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    domain: [],
    state: []
  });

  // Extract unique states from the data
  const availableStates = useMemo(() => {
    const stateSet = new Set();
    data.forEach(row => {
      if (row.state && row.state.trim()) {
        stateSet.add(row.state.trim());
      }
    });
    return Array.from(stateSet).sort();
  }, [data]);

  // Handle hash-based routing
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'taxonomy') {
      setViewMode('taxonomy');
    } else if (hash === 'methodology') {
      setViewMode('methodology');
    } else if (hash === 'citation') {
      setViewMode('citation');
    } else {
      setViewMode('table');
    }
  }, [location.hash]);

  useEffect(() => {
    // const url = `/jait-data.csv?t=${Date.now()}`;
    const url = `${import.meta.env.BASE_URL}jait-data.csv?t=${Date.now()}`;
    console.debug('Fetching CSV from', url);
    fetch(url, { cache: 'no-store' })
      .then(response => {
        console.debug('CSV fetch status', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(csvText => {
        console.debug('Loaded CSV (first 300 chars):', csvText.slice(0, 300));
        const parsedData = parseCSVData(csvText);
        console.debug('Parsed rows count:', parsedData.length, 'sample:', parsedData.slice(0, 2));
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

  const handleDownloadRequest = () => {
    setIsModalOpen(true);
  };

  const handleDownload = (contactInfo) => {
    // Log contact info (you can send this to your backend/analytics)
    console.log('Download requested by:', contactInfo);
    
    // You could send this to your backend here:
    // fetch('/api/track-download', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(contactInfo)
    // });

    // Proceed with actual download
    const headers = ['Name', 'City', 'State','Domain', 'Category', 'Last Searched'];
    const csvRows = [
      headers.join(','),
      ...data.map(row => [
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

  const handleTabChange = (tab) => {
    setViewMode(tab);
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: "Name",
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
  cell: info => {
    const raw = info.getValue();
    if (!raw) return '-';

    const categories = raw
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    return (
      <div className="category-cell">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="category-item"
            data-tooltip={categoryDefinitions[cat] || "No definition available"}
          >
            {cat}
          </div>
        ))}
      </div>
    );
  }
},

    {
      accessorKey: 'lastUpdated',
      header: 'Last Searched',
      cell: info => {
        const date = info.getValue();
        if (!date) return '-';
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
      <div className="jait-header-text">
      <h1 className="jait-title">JAI-T Database</h1>
      <h2 className="jait-subtitle">The JAI-T is a database that can be used to investigate the varying integrations of artificial intelligence tools within the criminal justice system. The database is composed of qualitative information found from news articles, reports, and publications, and captures instances of cities that have procured, piloted, or deployed AI-based tools over time.  
</h2>
      </div>
      <DownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleDownload}
      />
      
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
        <button
          className={`jait-tab ${viewMode === 'methodology' ? 'active' : ''}`}
          onClick={() => handleTabChange('methodology')}
        >
          Methodology
        </button>
        <button
          className={`jait-tab ${viewMode === 'citation' ? 'active' : ''}`}
          onClick={() => handleTabChange('citation')}
        >
          Citation
        </button>
      </div>

      {viewMode === 'table' && (
        <div className="main-content">
          <FilterSidebar 
            filters={filters} 
            onFilterChange={handleFilterChange}
            availableStates={availableStates}
          />
          <DataTable 
            data={data} 
            columns={columns} 
            filters={filters}
            onDownload={handleDownloadRequest}
          />
        </div>
      )}
      
      {viewMode === 'taxonomy' && <Taxonomy />}
      {viewMode === 'methodology' && <Methodology />}
      {viewMode === 'citation' && <Cite />}
      
    </div>
  );
}

export default JAITDatabase;