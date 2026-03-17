import CreateIssueForm from "@/forms/CreateIssueForm";
import AppLayout from "@/layouts/app-layout";
import { Project } from "@/types/types";
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from "@inertiajs/react";

interface IssueCreationProps {
    project: Project
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Issue',
        href: dashboard().url,
    },
    {
        title: 'Back to Project',
        href: dashboard().url
    }
];

export default function IssueCreationPage({project}: IssueCreationProps){
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Issue" />
            <div className="flex justify-center items-center h-screen">
                <CreateIssueForm project_id={project.id}/>
            </div>
            
        </AppLayout>
    )
}