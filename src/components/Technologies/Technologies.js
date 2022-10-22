import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technology in the industry.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React <br />
            JS, CSS, HTML <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Express <br />
            Mongoose/MongoDB <br />
            Node and Databases <br />
            Django - SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
