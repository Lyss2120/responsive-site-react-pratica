import React from 'react';
import { Button } from '../../js/components/Button';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import '../../style/Footer.css';



function Footer() {
  return (

    <div className="footer">
      <div className='footer-container glassnav'>
        <section className='footer-subscription '>
          <p className='footer-subscription-heading'>
            Unete a NUESTRA EXCLUSIVA comunidad. comparte tu trabajo con otros artistas
          </p>
          <div className="SIGNUP">
            <Link to='/sign-up'>
              <Button buttonSize='btn--large' buttonColor={'blue'}>
                Sign up
              </Button>
            </Link>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h4>About Us</h4>
              <Link to='/sign-up'>Mision Vision</Link>
              <Link to='/'>Terminos y condiciones</Link>
            </div>
            <div className='footer-link-items'>
              <h4>Bryan</h4>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
                Instagram
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
                Twitter
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
                Linkedin
              </Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h4>Demian</h4>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
                Instagram
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
                Twitter
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
                Linkedin
              </Link>
            </div>
            <div className='footer-link-items'>
              <h4>Lys</h4>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
                Instagram
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
                Twitter
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
                Linkedin
              </Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>

            <div className='footer-logo'>
              <Link to='/' className='social-logo navbar-brand'>
                ARTIDOCHELONE
              </Link>
            </div>
            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;