import { useState, useMemo } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import DataTable from '../components/DataTable';

// Sample data - replace with your actual data source
const sampleData = [
  {
    id: 1,
    name: 'Digital Courts Reports Generator',
    category: 'Backend Administration',
    domain: 'City',
    sector: 'Courts',
    state: 'California',
    description: 'Automated report generation system for court proceedings',
    link: '#',
    lastUpdated: '2024-01-15'
  },
  {
    id: 2,
    name: 'Facial Recognition Technology',
    category: 'Detection',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'New York',
    description: 'Facial recognition system for law enforcement use',
    link: '#',
    lastUpdated: '2024-02-20'
  },
  {
    id: 3,
    name: 'Predictive Policing System',
    category: 'Prediction',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'Illinois',
    description: 'AI-powered system for predicting crime hotspots',
    link: '#',
    lastUpdated: '2024-01-10'
  },
  {
    id: 4,
    name: 'Forensic DNA Analysis Tool',
    category: 'Forensic Analysis',
    domain: 'County',
    sector: 'Courts',
    state: 'Texas',
    description: 'Advanced DNA analysis software for forensic investigations',
    link: '#',
    lastUpdated: '2024-03-05'
  },
  {
    id: 5,
    name: 'Public Safety Dashboard',
    category: 'Front End Service',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'Florida',
    description: 'Interactive dashboard for public safety monitoring',
    link: '#',
    lastUpdated: '2024-02-15'
  },
  {
    id: 6,
    name: 'Surveillance Camera Network',
    category: 'Surveillance',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'California',
    description: 'City-wide surveillance camera monitoring system',
    link: '#',
    lastUpdated: '2024-01-25'
  },
  {
    id: 7,
    name: 'Case Management System',
    category: 'Backend Administration',
    domain: 'State',
    sector: 'Courts',
    state: 'New York',
    description: 'State-wide case management and tracking system',
    link: '#',
    lastUpdated: '2024-03-10'
  },
  {
    id: 8,
    name: 'Risk Assessment Tool',
    category: 'Prediction',
    domain: 'County',
    sector: 'Courts',
    state: 'Pennsylvania',
    description: 'AI tool for assessing defendant risk levels',
    link: '#',
    lastUpdated: '2024-02-28'
  },
  {
    id: 9,
    name: 'Evidence Catalog System',
    category: 'Forensic Analysis',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'Arizona',
    description: 'Digital cataloging system for evidence management',
    link: '#',
    lastUpdated: '2024-01-30'
  },
  {
    id: 10,
    name: 'Citizen Portal',
    category: 'Front End Service',
    domain: 'City',
    sector: 'Courts',
    state: 'Washington',
    description: 'Online portal for citizens to access court services',
    link: '#',
    lastUpdated: '2024-03-01'
  },
  {
    id: 11,
    name: 'License Plate Recognition',
    category: 'Detection',
    domain: 'State',
    sector: 'Law Enforcement',
    state: 'Virginia',
    description: 'Automated license plate recognition system',
    link: '#',
    lastUpdated: '2024-02-10'
  },
  {
    id: 12,
    name: 'Body Camera Analytics',
    category: 'Surveillance',
    domain: 'City',
    sector: 'Law Enforcement',
    state: 'Colorado',
    description: 'AI analysis of body camera footage',
    link: '#',
    lastUpdated: '2024-02-22'
  }
];

function JAITDatabase() {
  const [filters, setFilters] = useState({
    categories: [],
    domain: [],
    state: []
  });

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
    const headers = ['Name', 'Category', 'Domain', 'Sector', 'State', 'Description', 'Link', 'Last Updated'];
    const csvRows = [
      headers.join(','),
      ...dataToDownload.map(row => [
        `"${row.name.replace(/"/g, '""')}"`,
        `"${row.category.replace(/"/g, '""')}"`,
        `"${row.domain.replace(/"/g, '""')}"`,
        `"${row.sector.replace(/"/g, '""')}"`,
        `"${row.state.replace(/"/g, '""')}"`,
        `"${row.description.replace(/"/g, '""')}"`,
        `"${row.link || ''}"`,
        `"${row.lastUpdated || ''}"`
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

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Technology/System Name',
      cell: info => (
        <div>
          <strong>{info.getValue()}</strong>
          {info.row.original.link && (
            <a href={info.row.original.link} className="table-link"> LINK TO ARTICLE</a>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'domain',
      header: 'Domain',
    },
    {
      accessorKey: 'sector',
      header: 'Sector',
      cell: info => (
        <span className={`sector-badge sector-${info.getValue().toLowerCase().replace(' ', '-')}`}>
          {info.getValue()}
        </span>
      ),
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: info => <span className="description-text">{info.getValue()}</span>,
    },
    {
      accessorKey: 'lastUpdated',
      header: 'Last Updated',
      cell: info => {
        const date = info.getValue();
        if (!date) return '-';
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      },
    },
  ], []);

  return (
    <div className="jait-database">
      <div className="main-content">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <DataTable 
          data={sampleData} 
          columns={columns} 
          filters={filters}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
}

export default JAITDatabase;

