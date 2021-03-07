import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import NearMeIcon from '@material-ui/icons/NearMe';
import React from 'react';
import ContactIntro from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { ADDRESS_STR, EMAIL_STR, PHONE_NUMBER } from './constants';
import './styles.scss';

Contact.propTypes = {};
const style = {
  background: 'rgb(86, 145, 246)',
  color: '#fff',
  padding: '15px 40px',
};
function Contact(props) {
  return (
    <div className="contact">
      <div className="contact__content">
        <ContactIntro />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
