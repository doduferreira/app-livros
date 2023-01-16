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
import styles from '../StylesGlobal/StylesGlobal.module.css';

export default function SocialMediaButtonsMobile(props) {
  let location = useLocation();
  let currentUrl = 'http://www.guardardinheiro.com.br' + location.pathname;

  return (
    <div>
      <section className={styles.containerSocialMedia}>
        <div className={styles.itemSocialMedia}>
          <p className={styles.paragrafoShare}>
            Compartilhe essa página com seus amigos
          </p>
        </div>
      </section>
      <section className={styles.containerSocialMedia}>
        <div className={styles.itemSocialMedia}>
          <FacebookShareButton
            url={currentUrl}
            quote={props.title}
            hashtag={'#guardardinheiro #investimmentos #bolsadevalores #b3'}
            className={styles.socialMediaButton}
          >
            <FacebookIcon size={30} />
          </FacebookShareButton>
        </div>
        <div className={styles.itemSocialMedia}>
          <TwitterShareButton
            url={currentUrl}
            title={props.title}
            hashtag={'#guardardinheiro #investimmentos #bolsadevalores #b3'}
            className={styles.socialMediaButton}
          >
            <TwitterIcon size={30} />
          </TwitterShareButton>
        </div>
        <div className={styles.itemSocialMedia}>
          <WhatsappShareButton
            url={currentUrl}
            title={props.title}
            separator=":: "
            className={styles.socialMediaButton}
          >
            <WhatsappIcon size={30} />
          </WhatsappShareButton>
        </div>
        <div className={styles.itemSocialMedia}>
          {' '}
          <TelegramShareButton
            url={currentUrl}
            title={props.title}
            separator=":: "
            className={styles.socialMediaButton}
          >
            <TelegramIcon size={30} />
          </TelegramShareButton>
        </div>
        <div className={styles.itemSocialMedia}>
          <LinkedinShareButton
            url={currentUrl}
            title={props.title}
            separator=":: "
            className={styles.socialMediaButton}
          >
            <LinkedinIcon size={30} />
          </LinkedinShareButton>{' '}
        </div>
        <div className={styles.itemSocialMedia}>
          <EmailShareButton
            url={currentUrl}
            title={props.title}
            separator=":: "
            className={styles.socialMediaButton}
          >
            <EmailIcon size={30} />
          </EmailShareButton>
        </div>
      </section>
    </div>
  );
}
