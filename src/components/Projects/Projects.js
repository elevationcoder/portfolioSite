import design from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader'

const Projects = () => {
    return (

        <div className={design.Projects}>
            <PageHeader title={'My Projects'} />
            <div className={design.ProjectContent}>

            </div>
        </div>
    );
}

export default Projects;