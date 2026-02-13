import { Link } from "@inertiajs/react";
import CreateIssueForm from "@/forms/CreateIssueForm";
import type { Project, Issue} from "@/types/types";
import { Status} from "@/types/types";
import IssueCard from "@/pages/projects/issues/IssueCard";

type ProjectGridProps = {
    project: Project;
    issues: Issue[];
}





export default function ProjectGrid({project, issues}: ProjectGridProps) {
    const sorted_issues : Record<Status, Issue[]> = {[Status.Todo]: [], [Status.InProgress]: [], [Status.Review]: [], [Status.Done]: [] }
    issues.forEach((i: Issue) => {
            sorted_issues[i.status].push(i)
    })
    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <CreateIssueForm project_id={project.id}/>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                            
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                            <h2>Todo</h2>
                                {sorted_issues[Status.Todo].map((i) => (
                                    <Link key={i.id}
                                        href={`/projects/${project.id}/issues/${i.id}`}>
                                        <IssueCard issue={i} />
                                    </Link>
                                ))}
                                {/* <h2 className='text-center'>Add Pro</h2> */}
                                {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>In Progress</h2>
                                 {sorted_issues[Status.InProgress].map((i) => (
                                    <Link key={i.id}
                                        href={`/projects/${project.id}/issues/${i.id}`}>
                                        <IssueCard issue={i} />
                                    </Link>
                                ))}
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>Review</h2>
                                {sorted_issues[Status.Review].map((i) => (
                                    <Link key={i.id}
                                        href={`/projects/${project.id}/issues/${i.id}`}>
                                        <IssueCard issue={i} />
                                    </Link>
                                ))}
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center">
                                <h2>Done</h2>
                                {sorted_issues[Status.Done].map((i) => (
                                    <Link key={i.id}
                                        href={`/projects/${project.id}/issues/${i.id}`}>
                                        <IssueCard issue={i} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div> */}
        </div>
    )
}