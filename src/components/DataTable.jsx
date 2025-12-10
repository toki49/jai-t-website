import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import './DataTable.css';

function DataTable({ data, columns, filters, onDownload }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you could send formData to your backend/analytics
    console.log('Download requested by:', formData);
    onDownload(filteredData);
    setShowModal(false);
    // Reset form
    setFormData({ name: '', email: '', affiliation: '' });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', affiliation: '' });
  };

  const filteredData = useMemo(() => {
    return data.filter(item => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const searchableText = [
          item.name,
          item.category,
          item.domain,
          item.state,
          item.city || '',
          item.description,
          item.lastUpdated || ''
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Filter by categories (handle comma-separated categories)
      if (filters.categories.length > 0) {
        const itemCategories = item.category 
          ? item.category.split(',').map(c => c.trim())
          : [];
        if (!itemCategories.some(cat => filters.categories.includes(cat))) {
          return false;
        }
      }

      // Filter by domain
      if (filters.domain.length > 0) {
        const itemDomains = Array.isArray(item.domain) ? item.domain : [item.domain];
        if (!itemDomains.some(dom => filters.domain.includes(dom))) {
          return false;
        }
      }

      // Filter by state
      if (filters.state.length > 0) {
        if (!filters.state.includes(item.state)) {
          return false;
        }
      }

      return true;
    });
  }, [data, filters, searchQuery]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="data-table-container">
      <div className="data-table-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, category, state, description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={header.column.getCanSort() ? 'sortable' : ''}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' ↑',
                      desc: ' ↓',
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="no-results">
                  No results found. Try adjusting your filters.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div className="table-pagination">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
      
      <div className="table-bottom">
        <div className="table-info">
          Showing {filteredData.length} of {data.length} entries
        </div>
        {onDownload && (
          <button onClick={handleDownloadClick} className="download-btn">
            Download CSV
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <h2 className="modal-title">Download CSV</h2>
            <p className="modal-description">Please provide your information to download the data:</p>
            <form onSubmit={handleFormSubmit} className="modal-form">
              <div className="modal-form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="modal-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="modal-form-group">
                <label htmlFor="affiliation">Affiliation/Organization</label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleFormChange}
                />
              </div>
              <div className="modal-buttons">
                <button type="button" onClick={handleCloseModal} className="modal-cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="modal-submit-btn">
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;

