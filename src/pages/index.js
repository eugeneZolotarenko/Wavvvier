import React from 'react';

import Layout from '../components/Basics/Layout';
import SEO from '../components/Basics/seo';
import Generator from '../components/Generator/GeneratorMain';
import appScreenshot from '../images/appScreenshot.png';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Wavy Divider Generator"
        image={{
          src: appScreenshot,
          height: 300,
          width: 500,
        }}
      />
      <Generator />
    </Layout>
  );
};

export default IndexPage;
