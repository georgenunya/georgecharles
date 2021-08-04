import React from 'react';
import { MdBrush, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i can offer to you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdBrush />}
            title="Design"
            desc="Creating experiences through digital art. I study the latest trends to ensure my clients are getting the best. Apps, websites, logos, printed media, advertising campaigns, social media posts, UI, UX, SAP systems and ecommerce stores.
"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Mobile Solutions"
            desc="App development for iOS and Android devices. 
"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Development"
            desc="Full stack web development allows me to fine tune every part of your website to make sure it fits your brand perfectly. I have been studying this for over 10 years and i stay up to date with the latest technological advances.
"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
