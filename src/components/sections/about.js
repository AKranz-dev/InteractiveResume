import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-certs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  //Commented out because I'm defining skills manually below
  //const skills = ['AWS Certified DevOps Engineer Professional', 'Certified Kubernetes Administrator', 'Google IT Automation with Python Professional'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Austin Kranz and I enjoy improving development and IT operations
              through automation. My journey to DevOps began with a fascination for problem-solving
              and love for IT and software development. Over the years, I've honed my skills in a
              variety of tools and technologies, bridging the gap between development and
              operations.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working for a{' '}
              <a href="https://solarwinds.com/">worldwide leader</a> in IT observability,{' '}
              <a href="https://txst.yuja.com/V/Video?v=5488543&node=24179505&a=478761609">
                guest lecturing
              </a>{' '}
              at Texas State University, and working towards personal projects and{' '}
              <a href="https://www.linkedin.com/in/austinkranz/">achievements</a>. My main focus
              these days is building reliable and scalable infrastructure to support player-facing
              experiences at <a href="https://ea.com/">Electronic Arts</a>.
            </p>

            <p style={{ color: 'var(--lightest-slate)', fontSize: '1.3em' }}>
              View my DevOps Professional certifications:
            </p>
          </div>

          <ul className="skills-list">
            <li>
              {' '}
              <a
                href="https://www.credly.com/badges/ba222ba1-3751-4dc4-806c-0cfc4e27d355/linked_in_profile"
                target="_blank"
                rel="noreferrer">
                AWS Certified DevOps Engineer Professional
              </a>
            </li>{' '}
            <li>
              {' '}
              <a
                href="https://www.credly.com/badges/b4c369e6-dd83-4878-b72c-043e8b7a8729/linked_in_profile"
                target="_blank"
                rel="noreferrer">
                Certified Kubernetes Administrator
              </a>
            </li>{' '}
            <li>
              {' '}
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/6LBKBW5D3EN7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
                target="_blank"
                rel="noreferrer">
                Google IT Automation with Python Professional
              </a>
            </li>{' '}
            {/*Commented out the original list below, to allow the list items to be hyperlinks/*}
            {/*{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)} */}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
