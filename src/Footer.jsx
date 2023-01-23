import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div className='foot'>
    <div className=''>
        <a className='icon' href='https://mail.google.com'>
        <FontAwesomeIcon icon={faEnvelope} /></a>
        <a className='icon' href='https://ne-np.facebook.com/jithin.jithu.1004837/'>
        <FontAwesomeIcon icon={faFacebook} /></a>
        <a className='icon' href='https://www.instagram.com/jith____.in/'>
        <FontAwesomeIcon icon={faInstagram} /></a>
        <a className='icon' href='https://www.linkedin.com/in/jithin-p-suresh-52ba27166/?original_referer='>
        <FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    <div className='footp'>
        <h6>© jithin p suresh, 2023. All rights reserved.</h6>
    </div>
    </div>
  );
}
export default Footer;