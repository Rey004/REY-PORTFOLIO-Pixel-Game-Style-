import React from 'react'
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper'
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject'

const Project2 = () => {
    return (
        <ProjectWrapper>
            <Portfolioproject 
            backgroundImage={'/assets/Rey-Ventures.webp'}
            project_name={'Rey Ventures'}
            project_overview={'My purpose behind starting Rey Ventures is to aware people about the things which are relevant and are useful to make an impact on the society so that th world can be a better place .'}
            role={'UI/UX Designer, Developer'}
            tech={'Figma, Photoshop, GSAP, CSS'}
            link={'https://rey004.github.io/Rey-Ventures/'}
            />
        </ProjectWrapper>
    )
}

export default Project2