import React, { useState } from 'react';
import './ReportsLayout.css';

function App() {
  const [reports, setReports] = useState([
    {
      serialNumber: 1,
      doctorName: 'Dr. John Doe',
      speciality: 'Cardiology',
      reportUrl: '/medical_report.pdf'
    },
    {
      serialNumber: 2,
      doctorName: 'Dr. Jane Smith',
      speciality: 'Dermatology',
      reportUrl: '/medical_report.pdf'
    },
  ]);

  const handleViewReport = (reportUrl) => {
    // Open the report in a new tab
    window.open(reportUrl, '_blank');
  };

  const handleDownloadReport = (reportUrl) => {
    // Create a temporary anchor element and trigger the download
    const link = document.createElement('a');
    link.href = reportUrl;
    link.download = reportUrl.split('/').pop(); // Use the file name from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1>Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.serialNumber}>
              <td>{report.serialNumber}</td>
              <td>{report.doctorName}</td>
              <td>{report.speciality}</td>
              <td>
                <button onClick={() => handleViewReport(report.reportUrl)}>
                  View Report
                </button>
              </td>
              <td>
                <button onClick={() => handleDownloadReport(report.reportUrl)}>
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
