import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types/navigation';
import type { Issue, Project } from '@/types/types';
import ProjectGrid from './ProjectGrid';
import { Link } from '@inertiajs/react';
import InviteDialog from './InviteDialog';
import { useEffect, useState } from 'react';
import { useEcho, useEchoPresence } from "@laravel/echo-react";
 import { useConnectionStatus } from "@laravel/echo-react";
import Echo from 'laravel-echo';

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

    

    const [onlineUser, setOnlineUsers] = useState([]);

    const {channel, leave} = useEchoPresence(
    `projects.${project.id}`,
    "OpenedProject",
    (e) => {
        console.log(e);
    },
    );

    useEffect(() => {
        
        const presenceChannel = channel();

        presenceChannel.here((users) => {
            console.log(users)
            setOnlineUsers(users)
        });

        presenceChannel.joining((user) => {
            setOnlineUsers((prev) => {
                if (prev.some((u) => u.email === user.email)) return prev;
                return [...prev, user];
            });
        });
        
        presenceChannel.leaving((user) => {
            console.log(user.name + " Left")
            setOnlineUsers((prev) => prev.filter((u) => u.name !== user.name))
        })

        presenceChannel.error((error) => {
            console.error(error)
        })

        return () => {leave()};
       
    }, [project.id, channel]);


    function ConnectionIndicator() {
        const status = useConnectionStatus();

        return <div>Connection: {status}</div>;
}
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
                 
                {ConnectionIndicator()}

                <h2 className="mt-6 text-xl font-semibold">Issue Board</h2>
                <ProjectGrid issues={issues} project={project}/>

                <h2>Online users: {onlineUser.map((user) => user.name).join(',')}</h2>
        </div>
        </AppLayout>
        
    );
}
