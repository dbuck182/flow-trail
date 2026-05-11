import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types/navigation';
import type { Issue, Project } from '@/types/types';
import ProjectGrid from './ProjectGrid';
import { Link } from '@inertiajs/react';
import InviteDialog from './InviteDialog';
import { useState } from 'react';

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

    const [showInviteModal, setShowInviteModal] = useState(true);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='p-4 flex flex-col'>
                <h1 className="text-3xl font-bold">Project: {project.name}</h1>

                <p className="mt-2 text-gray-600">
                    Description: {project.description}
                </p>

                <Link
                href={`/projects/${project.id}/invite`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center"
                >
                    Invite Members
                </Link>
                
                {/* <InviteDialog project={project} isOpen={showInviteModal} onClose={() => setShowInviteModal(false)}/> */}
                 
                

                <h2 className="mt-6 text-xl font-semibold">Issue Board</h2>
                <ProjectGrid issues={issues} project={project}/>
        </div>
        </AppLayout>
        
    );
}
