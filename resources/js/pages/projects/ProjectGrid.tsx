import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import CreateIssueForm from "@/forms/CreateIssueForm";
import type { Project, Issue } from "@/types/types";


type ProjectGridProps = {
    project: Project;
    issues: Issue[];
}

export default function ProjectGrid({project, issues}: ProjectGridProps) {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <CreateIssueForm project_id={project.id}/>
            {issues.map((i: Issue) => (
                <h1>{i.title}</h1>
            ))}
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                            
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                            <h2>Todo</h2>
                                {/* <h2 className='text-center'>Add Pro</h2> */}
                                {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>In Progress</h2>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>Review</h2>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>Done</h2>
                            </div>
                        </div>
                        {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div> */}
        </div>
    )
}