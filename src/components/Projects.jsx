import { useFilterContext } from '../context/filter_context';
import { useProjectsContext } from '../context/projects_context';

const Projects = ()=>{
    const {projects_loading, projects_error, projects} = useProjectsContext();

    const {filtered_projects} = useFilterContext();

    if(projects_loading){
        return(
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }

    if(projects_error){
        return(
            <section className="projects">
                <h2>There was an error loading the projects {':('}</h2>
            </section>
        )
    }

    return(
        <section className="projects">
            <div className="projects-center">
                {filtered_projects?.map((project)=>{
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
                        reactQuery,
                        reactLibraries,
                        thirdPartyLibraries,
                        css
                    } = project;

                    return(
                        <div className="card" key={id}>
                            <div className="card__title">{title}</div>
                            <div className="card__description">{description}</div>
                                <ul className="card__features">
                                        {typeScript? <li className="sausage">typeScript</li> : ''}
                                        {context? <li className="sausage">Context</li> : ''}
                                        {redux? <li className="sausage">Redux</li> : ''}
                                        {reactRouter? <li className="sausage">React Router</li> : ''}
                                        {reactQuery? <li className="sausage">React Query</li> : ''}
                                    {css?.map((item)=>{
                                        return(
                                            <li className="sausage" key={item}>{item}</li>
                                        )
                                    })}
                                    {reactLibraries?.map((lib)=>{
                                        return(
                                            <li className="sausage" key={lib}>{lib}</li>
                                        )
                                    })}
                                     {thirdPartyLibraries?.map((lib)=>{
                                            return(
                                                <li className="sausage" key={lib}>{lib}</li>
                                            )
                                        })}
                            </ul>
                            <div className="card__top">
                                <div className="card__size">
                                    {simple? 'Small' : 'Large'} Project
                                </div>
                                <div className="card__buttons">
                                    <a target="_blank" href={liveUrl}>live site</a>
                                    <a target="_blank" href={codeUrl}>github</a>
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