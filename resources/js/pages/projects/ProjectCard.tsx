import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/types";

type ProjectCardParams =  {
    project: Project;
}


export default function ProjectCard({project} : ProjectCardParams) {
    return (
            <Card className="w-full max-w-sm p-3 hover:border-primary">
                <CardTitle className="">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </Card>
    )
}