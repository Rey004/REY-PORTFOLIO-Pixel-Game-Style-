import React from 'react'
import ProjectWrapper from '../../../components/ProjectWrapper/ProjectWrapper'
import Portfolioproject from '../../../components/portfolio_project/Portfolioproject'

const Project2 = () => {
    return (
        <ProjectWrapper>
            <Portfolioproject 
            backgroundImage={'../../../public/assets/Rey-Ventures.webp'}
            project_name={'Rey Ventures'}
            project_overview={'My purpose behind starting Rey Ventures is to aware people about the things which are relevant and are useful to make an impact on the society so that th world can be a better place . in this channel I’ll be putting all of my learnings and the updates related my entrepreneurial life so that you guys can learn from my Lifestyle. Join me in my journey to escape the Rat Race.'}
            role={'UI/UX Designer, Developer'}
            tech={'Figma, Photoshop, GSAP, CSS'}
            link={'https://rey004.github.io/Rey-Ventures/'}
            />
        </ProjectWrapper>
    )
}

export default Project2