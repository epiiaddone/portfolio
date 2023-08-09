import {createClient} from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
    space:'2vcnggaz7403',
    environment:'master',
    accessToken:'CZZlNhvX_MqiYX4pCGatebonGaBUKUIgd9rca4tH8qE'
})

export const useFetchProjects = ()=>{
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async() =>{
        try{
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item)=>{
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
            setProjects(projects);
            setLoading(false);
        }catch(error){
            console.log(error)
            setLoading(false);
        }
    }

    useEffect(()=>{getData()}, []);

    return {loading, projects}
}
