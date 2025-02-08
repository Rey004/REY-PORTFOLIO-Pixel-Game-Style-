import React from 'react';
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper';
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject';

const Freak_Lifestyle = () => {
  return (
    <ProjectWrapper>
      <div>
        <Portfolioproject
          backgroundImage={'/assets/Freak-Lifestyle.webp'}
          project_name={'Freak Lifestyle'}
          project_overview={'FStreetwear Clothing Brand '}
          role={'Co-founder, Developer'}
          tech={'Wordpress, WooCommerce, Elementor'}
          link={'https://freaklifestyle.com'}
        />
      </div>
    </ProjectWrapper>
  );
};

export default Freak_Lifestyle;