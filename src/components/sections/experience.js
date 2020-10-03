import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Position } from '..';

const Experience = () => {
  const { allExperienceYaml } = useStaticQuery(
    graphql`
      {
        allExperienceYaml {
          nodes {
            id
            company
            position
            startDate
            endDate
            achievements
            skills
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="experience-section">
      <h1>Experience.</h1>
      {allExperienceYaml.nodes.map(({ id, ...job }) => (
        <Position {...job} key={id} />
      ))}
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(5)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    h1 {
      text-align: center;
    }
  }
`;

export default Experience;
