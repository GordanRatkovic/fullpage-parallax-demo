import React from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import { getSrc } from 'gatsby-plugin-image';

import data from '../data';

const pluginWrapper = () => {
  // eslint-disable-next-line global-require
  require('../fullpage.parallax.min');
};

const HomePage = () => (
  <FullpageWrapper>
    <ReactFullpage
      // debug
      licenseKey="9KQQI-8M1PK-K2ARH-QJ3A7-CVJJM"
      pluginWrapper={pluginWrapper}
      // navigation
      navigation
      navigationPosition="left"
      // parallax options
      parallax
      parallaxKey="UUlibVYwYkdsbWVTNWhjSEE9RThfV1dVY0dGeVlXeHNZWGc9TXpk"
      parallaxOptions={{ type: 'cover', percentage: 90, property: 'translate' }}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {data.map((section, index) => (
            <FullpageSection className="section" key={index}>
              {section.images.map((image, imageIndex) => (
                <div className="slide" key={imageIndex}>
                  <div>
                    <ParallaxImage
                      className="fp-bg"
                      backgroundImage={getSrc(image.gatsbyImageData)}
                    />
                    <div />
                  </div>
                </div>
              ))}
            </FullpageSection>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  </FullpageWrapper>
);

const FullpageWrapper = styled.div`
  backface-visibility: hidden;
  background-color: var(--color-grey);
`;

const FullpageSection = styled.div`
  backface-visibility: hidden;
`;

const ParallaxImage = styled.div`
  z-index: 3;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundImage});
`;

export default HomePage;
