import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './ReviewForm.css';
import GiveReviews from './GiveReviews';
import { v4 as uuidv4 } from 'uuid';

const visited_doctors = [
  {"name":"Dr. Jiao Yang","speciality":"Dentist","review":{"name":'', "review":'', "rating": 0}},
  {"name":"Dr. Michael Smith","speciality":"General Physician","review":{"name":'', "review":'', "rating": 0}},
  {"name":"Dr. Laura Taylor","speciality":"General Physician","review":{"name":'', "review":'', "rating": 0}}
];

const ReviewForm = () => {

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
              <GiveReviews key={doctor} index={index+1} doctor={doctor.name} dspeciality={doctor.speciality} dreview={doctor.review} />
            )))}
          </tbody>
        </table>

      </div>

  );
};

export default ReviewForm;
