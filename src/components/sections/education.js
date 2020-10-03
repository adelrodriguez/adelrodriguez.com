import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Degree } from '..';

const Education = () => {
  const { allEducationYaml } = useStaticQuery(graphql`
    {
      allEducationYaml {
        nodes {
          id
          school
          degree
          field
          description
          startYear
          endYear
        }
      }
    }
  `);

  return (
    <SectionWrapper name="education-section">
      <h1>Education.</h1>
      {allEducationYaml.nodes.map(({ id, ...degree }) => (
        <Degree {...degree} key={id} />
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

export default Education;
