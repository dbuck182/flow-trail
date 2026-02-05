import type { Project } from "@/types/types";


type ProjectCardParams =  {
    project: Project;
}


export default function ProjectCard({project} : ProjectCardParams) {
    return (
        <div className='border flex flex-row gap-3'>
            <h1>{project.name}</h1>
            <h1>{project.description}</h1>
        </div>
    )
}