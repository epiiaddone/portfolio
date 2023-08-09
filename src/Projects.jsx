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
                    let {
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

                    redux='Yes';
                    context='Yes';
                    reactRouter='yes';
                    return(
                        <div className="card" key={id}>
                            <div className="card__size">
                                {simple? 'Small' : 'Large'} Project
                            </div>
                            <div className="card__title">{title}</div>
                            <div className="card__description">{description}</div>
                            <div className="card__buttons">
                                <a>live site</a>
                                <a>github</a>
                            </div>
                            <div className="card__features">
                                <div className="card__features--title">React</div>
                                <div className="card__features--values">
                                    {typeScript? <div className="sausage">typeScript</div> : ''}
                                    {context? <div className="sausage">Context</div> : ''}
                                    {redux? <div className="sausage">Redux</div> : ''}
                                    {reactRouter? <div className="sausage">React Router</div> : ''}
                                </div>
                            </div>
                            <div className="card__features">
                            <div className="card__features--title">CSS</div>
                                <div className="card__features--values">
                                {css.map((item)=>{
                                    return(
                                        <div className="sausage" key={item}>{item}</div>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="card__features">
                            <div className="card__features--title">React Libraries</div>
                                <div className="card__features--values">
                                {reactLibraries.map((lib)=>{
                                    return(
                                        <div className="sausage" key={lib}>{lib}</div>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="card__features">
                                <div className="card__features--title">3rd Party Libraries</div>
                                <div className="card__features--values">
                                    {thirdPartyLibraries.map((lib)=>{
                                        return(
                                            <div className="sausage" key={lib}>{lib}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;