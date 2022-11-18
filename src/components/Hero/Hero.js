import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Here you can catch up with what I've been developing! Check out my GitHub to see the latest coding activity, or check out some of my projects to witness the progression! <br/> Thanks for stopping by!
      </SectionText>
      <Button onClick={() => openInNewTab('https://docs.google.com/document/d/e/2PACX-1vQBC58HtoD4blmjJVkSyvlSDX3168ZHAHL2e5Ee8rflfqYncTawZMnLI4i3RvwlDwOToOaJk5KDj6y9/pub')}>Check the Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;