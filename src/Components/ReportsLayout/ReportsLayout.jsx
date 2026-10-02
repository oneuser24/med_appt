import React, { useEffect, useState } from 'react';
import './ReportsLayout.css';

const reports = [
  {"name":"Dr. Jiao Yang","speciality":"Dentist","reportName":"jiao_yang_patient_report.pdf"},
  {"name":"Dr. Michael Smith","speciality":"General Physician","reportName":"michael_smith_patient_report.pdf"},
  {"name":"Dr. Laura Taylor","speciality":"General Physician","reportName":""}
];

const ReportsLayout = () => {

  return (

      <div className="reports-container">
        <h2><b>Reports</b></h2>
        <table class="reports-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>View Report</th>
              <th>Download Report</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(((report, index) => (
                <tr key={report}>
                    <td>{index+1}</td>
                    <td>{report.name}</td>
                    <td>{report.speciality}</td>
                    <td>
                        <button className='reports-table td button a' disabled={report.reportName ? false : true}>
                            <a href={`./${report.reportName}`} rel="noopener noreferrer" target="_blank">
                                View Report
                            </a>
                        </button>
                    </td>
                    <td>
                        <button className='reports-table td button a' disabled={report.reportName ? false : true}>
                            <a href={`./${report.reportName}`} download={`./${report.reportName}`}>
                                Download Report
                            </a>
                        </button>
                    </td>
                </tr>
            )))}
          </tbody>
        </table>

      </div>

  );
};

export default ReportsLayout;
