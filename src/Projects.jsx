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
                {projects.map((project)=>{
                    const {
                        id,
                        title,
                        description,
                        liveUrl,
                        codeUrl,
                        simple,
                        typeScript,
                        redux,
                        context,
                        reactRouter,
                        reactLibraries,
                        thirdPartyLibraries,
                        css
                    } = project;
                    return(
                        <div className="card" key={id}>
                            <div className="card__title">{title}</div>
                            <div className="card__description">{description}</div>
                            <div className="card__buttons">
                                <button>live site</button>
                                <button>github</button>
                            </div>
                            <div className="card__size">
                                {simple? 'Small' : 'Large'} Project
                            </div>
                            <div className="card__features">
                                <div class="card__features--typescript">
                                    {typeScript? 'typeScript' : ''}
                                </div>
                                <div className="card__features--redux">
                                    {redux? 'Redux' : ''}
                                </div>
                                <div className="card__features--context">
                                    {context? 'Context' : ''}
                                </div>
                                <div className="card__features--router">
                                    {reactRouter? 'React Router' : ''}
                                </div>
                            </div>
                            <div className="card__css">
                                {css.map((item)=>{
                                    return(
                                        <div>{item}</div>
                                    )
                                })}
                            </div>
                            <div className="card__react-libraries">
                                {reactLibraries.map((lib)=>{
                                    return(
                                        <div>{lib}</div>
                                    )
                                })}
                            </div>
                            <div className="card__third-party-libraries">
                                {thirdPartyLibraries.map((lib)=>{
                                    return(
                                        <div>{lib}</div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;