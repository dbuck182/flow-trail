import { Link } from "@inertiajs/react";
import CreateIssueForm from "@/forms/CreateIssueForm";
import type { Project, Issue} from "@/types/types";
import { Status} from "@/types/types";
import IssueCard from "./issues/IssueCard";
import {useDraggable} from '@dnd-kit/react';
import IssueColumn from "./IssueColumn";
import { DragDropProvider } from "@dnd-kit/react";


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
        <DragDropProvider>
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                            <IssueColumn id='Todo'>
                                {sorted_issues[Status.Todo].map((i) => (
                                    <IssueCard issue={i} />
                                ))}
                            </IssueColumn>
                            {/* {sorted_issues[Status.Todo].map((i) => (
                                    <IssueCard issue={i} />
                                ))} */}
                            
                            <IssueColumn id='In Progress'>
                                {sorted_issues[Status.InProgress].map((i) => (
                                    <IssueCard issue={i} />
                                ))}
                            </IssueColumn>
                            
                            <IssueColumn id='Review'>
                                {sorted_issues[Status.Review].map((i) => (
                                    <IssueCard issue={i} />
                                ))}
                            </IssueColumn>
                            <IssueColumn id='Done'>
                                {sorted_issues[Status.Done].map((i) => (
                                    <IssueCard issue={i} />
                                ))}
                            </IssueColumn>
                        </div>
                        <CreateIssueForm project_id={project.id}/>
                        {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div> */}
        </div>
        </DragDropProvider>
    )
}