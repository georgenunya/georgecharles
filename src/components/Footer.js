import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
        text-align: center;
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">George Charles</h1>
          <PText>
            A super friendly guy who puts values and behaviours first before anything. Proud supporter of the MIND charity. Im currently working for Nunya Group but open to new projects.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+44 7391 725026',
                path: 'tel:+447391725026',
              },
              {
                title: 'georgehorrobin@outlook.com',
                path: 'mailto:georgehorrobin@outlook.com',
              },
              {
                title: 'Essex, United Kingdom',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/georgecharles__/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/george-charles-04874696',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - George Charles | Designed and Developed By{' '}
            <a target="_blank" rel="noreferrer" href="http://georgecharles.uk">
              George Charles
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}