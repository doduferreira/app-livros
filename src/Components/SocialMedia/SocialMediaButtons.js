import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import styles from '../StylesGlobal/StylesGlobal.module.css';

export default function SocialMediaButtons(props) {
  let location = useLocation();
  let currentUrl = 'http://www.guardardinheiro.com.br' + location.pathname;

  function handleCLick(event) {
    event.preventDefault();
    console.log('teste');
  }

  return (
    <div className={styles.socialMediaPopper}>
      {/* <p className={styles.paragrafoShare}>Compartilhe</p>
      <FacebookShareButton
        url={currentUrl}
        quote={props.title}
        hashtag={'#guardardinheiro #investimmentos #bolsadevalores #b3'}
        className={styles.socialMediaButton}
      >
        <FacebookIcon size={25} />
      </FacebookShareButton>
      <TwitterShareButton
        url={currentUrl}
        title={props.title}
        hashtag={'#guardardinheiro #investimmentos #bolsadevalores #b3'}
        className={styles.socialMediaButton}
        onClick={handleCLick}
      >
        <TwitterIcon size={25} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={currentUrl}
        title={props.title}
        separator=":: "
        className={styles.socialMediaButton}
      >
        <WhatsappIcon size={25} />
      </WhatsappShareButton>
      <TelegramShareButton
        url={currentUrl}
        title={props.title}
        separator=":: "
        className={styles.socialMediaButton}
      >
        <TelegramIcon size={25} />
      </TelegramShareButton>
      <LinkedinShareButton
        url={currentUrl}
        title={props.title}
        separator=":: "
        className={styles.socialMediaButton}
      >
        <LinkedinIcon size={25} />
      </LinkedinShareButton>
      <EmailShareButton
        url={currentUrl}
        title={props.title}
        separator=":: "
        className={styles.socialMediaButton}
      >
        <EmailIcon size={25} />
      </EmailShareButton> */}
    </div>
  );
}
