import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2015, text: 'Placed 50th US Nationwide in HSCD Speech'},
  { number: 2016, text: 'Illinois 4th All-Star Goalie', },
  { number: 2022, text: 'Graduated: College of lake County', },
  { number: 2022, text: 'Graduated: GA Full-Stack SE Immersive', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
