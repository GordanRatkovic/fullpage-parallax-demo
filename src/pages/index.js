import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { getSrc } from 'gatsby-plugin-image';

import data from '../data';

const pluginWrapper = () => {
  // eslint-disable-next-line global-require
  require('../fullpage.parallax.min');
};

const HomePage = () => (
  <div
    style={{
      backfaceVisibility: 'hidden',
      backgroundColor: '#cdcdcd',
    }}
  >
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
            <div className="section" key={index}>
              {section.images.map((image, imageIndex) => (
                <div className="slide" key={imageIndex}>
                  <div>
                    <div
                      className="fp-bg"
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 3,
                        backgroundImage: `url(${getSrc(image.gatsbyImageData)})`,
                      }}
                    />
                    <div />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  </div>
);

export default HomePage;
