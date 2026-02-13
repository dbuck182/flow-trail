import UpdateIssueForm from '@/forms/UpdateIssueForm';
import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types/navigation';
import type { Issue, Project } from '@/types/types';


interface ShowIssueProps {
    project: Project;
    issue: Issue;
}

// COME BACK TO FIX THIS


export default function ShowIssue({ project, issue }: ShowIssueProps) {
    const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Issues',
        href: projects().url,
    },
];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='p-4'>
            <h1 className="text-3xl font-bold">Issue: {issue.title}</h1>

            <p className="mt-2 text-gray-600">
                Description: {project.description}
            </p>

            <h2 className="mt-6 text-xl font-semibold">Issue Board</h2>
            <UpdateIssueForm issue={issue} project_id={project.id}/>
        </div>
        </AppLayout>
        
    );
}