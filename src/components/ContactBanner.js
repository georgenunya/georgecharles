import React from 'react'
import styled from 'styled-components';
import Button from './Button'
import PText from './PText'

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper{
        background-color: var(--deep-dark);
        padding: 5rem 0rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px){
        .contactBanner__heading{
            font-size: 2rem;
        }
    }
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>
                        Have a project in mind?
                    </PText>
                    <h3 className="contactBanner__heading">Let me help you</h3>
                    <Button btnText="Contact Now" btnLink="/contact"/>
                </div>
            </div>
        </ContactBannerStyles>
    )
}
