// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './ReviewForm.css';

const stars = [1, 2, 3, 4, 5];

// Function component for giving reviews
function GiveReviews( { index, doctor, dspeciality, dreview } ) {

  const [showModal, setShowModal] = useState(false);
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState(dreview);
  const [isSubmitted, setIsSubmitted] = useState(()=>{return (dreview.name ? true : false)});

  const handleStars = (stars) => {
    setFormData({...formData, 'rating': stars});
  };

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);

    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      setIsSubmitted(true);
    } else {
      setShowWarning(true);
    }
    
  };

  return (


    <tr >
      <td>{index}</td>
      <td>{doctor}</td>
      <td>{dspeciality}</td>
      <td>
        <Popup
          style={{ backgroundColor: '#FFFFFF' }}
          trigger={
            <button className='reviews-table td button' disabled={formData.name} >
              {isSubmitted ? (
                <div>Review submitted</div>
              ) : (
                <div>Give review</div>
              )}
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
              <div>

                { !isSubmitted && (
                    <div className="review-form-container">
                      <form onSubmit={handleSubmit}>
                        <h2>Give Your Feedback</h2>
                        {/* Display warning message if not all fields are filled */}
                        {showWarning && <p className="warning">Please fill out all fields.</p>}
                        <div>
                          <label htmlFor="name">Name:</label>
                          <input type="text" id="name" name="name" value={formData.name} required maxLength={100} onChange={handleChange} />
                        </div>
                        <div>
                          <label htmlFor="review">Review:</label>
                          <textarea id="review" name="review" required maxLength={500} value={formData.review} onChange={handleChange} />
                        </div>
                        <div>
                          <label htmlFor="rating">Raiting:</label>
                          <div id='rating' name='rating'>
                            {stars.map(star=>(<span key={star} className={`${formData.rating >= star ? 'stars-filled' : 'stars'} `} onClick={()=>handleStars(star)}>&#9733;</span>))}
                          </div>
                        </div>
                        {/* Submit button for form submission */}
                        <button type="submit" >Submit</button>
                      </form>
                    </div>
                  )
                }
              </div>
            )
          }
        </Popup>
      </td>
      <td>
        { isSubmitted && (<>
            <div>{Array(formData.rating).fill('⭐')}</div>
            <div>{formData.review}</div>
            <div className='by-patient' style={{ fontStyle: 'italic' }}>by {formData.name}</div>
          </>
        )}
      </td>
    </tr>
  );
};

export default GiveReviews;
