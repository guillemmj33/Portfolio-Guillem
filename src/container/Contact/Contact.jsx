import React from 'react';
import './Contact.scss';
import smile from '../../assets/Images/smile.png';

const Contact = () => {
  return (
    <div id="contact--page" className="contact--background-color">
      <div className="container">
        <h1>Let's discuss about your project</h1>
        <div className="contact--box">
          <div className="contact--box-1">
            <div className="contact--box-1_1">
              <input type="text" placeholder="youremailhere@gmail.com" />
            </div>
            <div className="contact--box-1_2">
             <input type="text" placeholder="Barcelona, Spain" />
            </div>
            <div className="contact--box-1_3">
              <p>Message</p>
              <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Write your message here...">
              </textarea>
            </div>
            <button>Send</button>
          </div>

          <div className="contact--box-2">
            <img src={smile} alt="Smile Face by Guillem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;