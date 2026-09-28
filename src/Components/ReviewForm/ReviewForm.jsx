import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './ReviewForm.css';
import GiveReviews from './GiveReviews';
import { v4 as uuidv4 } from 'uuid';

const visited_doctors = [
  {"name":"Dr. Jiao Yang","speciality":"Dentist","review":''},
  {"name":"Dr. Michael Smith","speciality":"General Physician","review":''},
  {"name":"Dr. Laura Taylor","speciality":"General Physician","review":''}
];

const ReviewForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  

  return (
    
      <div className="reviews-container">
        <h2><b>Reviews</b></h2>
        <table class="reviews-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th>Review Given</th>
            </tr>
          </thead>
          <tbody>
            {visited_doctors.map(((doctor, index) => (
              <tr key={doctor}>
                <td>{index}</td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td><Popup
                      style={{ backgroundColor: '#FFFFFF' }}
                      trigger={
                        <button >
                            <div>Give Review</div>
                        </button>
                      }
                      modal
                      open={showModal}
                      onClose={() => setShowModal(false)}
                    >
                      <GiveReviews  />

                    </Popup>
                </td>
                <td>{doctor.review}</td>
              </tr>
            )))}
          </tbody>
        </table>
        
      </div>

  );
};

export default ReviewForm;
