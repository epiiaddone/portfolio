import {useFetchProjects} from './fetchProjects';


const Projects = ()=>{
    const {loading, projects} = useFetchProjects();

    console.log(loading, projects);

    if(loading){
        return(
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }

    return(
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div class="title-underline"></div>
            </div>
            <div class="projects-center">
                {}
            </div>
        </section>
    )
}

export default Projects;