// ExportToExcel.js
import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import PropTypes from 'prop-types';

const ExportToExcel = ({ apiData, fileName }) => {

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div className='flex justify-center items-center'>
    <button 
        onClick={() => exportToCSV(apiData, fileName)}
        className='bg-indigo-500 text-white p-4 rounded-lg'
    >
        Reporte de Oficios
    </button>
    </div>
  );
};

ExportToExcel.propTypes = {
    apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
    fileName: PropTypes.string.isRequired,
  };
  

export default ExportToExcel;
