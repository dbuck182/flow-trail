import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types/navigation';
import type { Issue, Project } from '@/types/types';
import ProjectGrid from './ProjectGrid';

interface ShowProps {
    project: Project;
    issues: Issue[];
}

// COME BACK TO FIX THIS
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: projects().url,
    },
];

export default function Show({ project, issues }: ShowProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='p-4'>
            <h1 className="text-3xl font-bold">Project: {project.name}</h1>

            <p className="mt-2 text-gray-600">
                Description: {project.description}
            </p>

            <h2 className="mt-6 text-xl font-semibold">Issue Board</h2>
            <ProjectGrid issues={issues} project={project}/>
            {/* <ul className="mt-2 space-y-2">
                {project.issues?.map(issue => (
                    <li key={issue.id}>
                        {issue.title}
                    </li>
                ))}
            </ul> */}
        </div>
        </AppLayout>
        
    );
}
