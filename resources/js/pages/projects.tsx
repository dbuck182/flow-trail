import { Head, Link } from '@inertiajs/react';
import CreateProjectForm from '@/forms/CreateProjectForm';
import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import type { Project } from '@/types/types';
import ProjectCard from './projects/ProjectCard';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: projects().url,
    },
];

type ProjectProps = {
    project_list: Project[];
}

export default function Projects({project_list}: ProjectProps) {

    // Probably a useEffect here to grab all projects which belong to me


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-8">
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3"> */}
                    <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border w-full max-w-md p-4">
                        <h2 className='text-center'>Add Project</h2>
                        <CreateProjectForm />
                        {/* Make a new modal here that comes up on click */}
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                    </div>
                    {/* <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div> */}
                {/* </div> */}
                <h1 className="text-3xl">Projects: </h1>
                <div className='flex flex-col gap-1'>
                    {project_list.map((p: Project) => (
                    <Link key={p.id}
                    href={`/projects/${p.id}`}>
                        <ProjectCard project={p}/>
                    </Link>
                )
                
                )}
                </div>
                
                {/* Load in current Porjcts and list them */}
                {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            </div>
        </AppLayout>
    );
}