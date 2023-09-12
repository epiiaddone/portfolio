import {createClient} from 'contentful';

const client = createClient({
    space:'2vcnggaz7403',
    environment:'master',
    accessToken:'CZZlNhvX_MqiYX4pCGatebonGaBUKUIgd9rca4tH8qE'
})

export const getProjects = async ()=>{
    let error, projects_data;

        try{
            const response = await client.getEntries({content_type: 'projects'});
            projects_data = response.items.map((item)=>{
                const {
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
                } = item.fields;
                const id = item.sys.id;
                return {
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
                }
            })
        }catch(error){
            console.log('error getting projects', error)
            error = error;
        }
    
    return {error, projects_data}
}
