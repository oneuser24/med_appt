import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './ReviewForm.css';
import GiveReviews from './GiveReviews';
import { v4 as uuidv4 } from 'uuid';


const ReviewForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  

  return (
    
      <div className="doctor-card-container-review">AAAAAAA
       <Popup
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
      </div>

  );
};

export default ReviewForm;
