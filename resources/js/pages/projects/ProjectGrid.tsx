import {move} from '@dnd-kit/helpers';
import { DragDropProvider } from "@dnd-kit/react";
import { router } from '@inertiajs/react'
import { useRef, useState } from "react";
import CreateIssueForm from "@/forms/CreateIssueForm";
import type { Project, Issue} from "@/types/types";
import { Status} from "@/types/types";
import IssueColumn from "./IssueColumn";
import IssueCard from "./issues/IssueCard";

type ProjectGridProps = {
    project: Project;
    issues: Issue[];
}

export default function ProjectGrid({project, issues}: ProjectGridProps) {
    const [columns, setColumns] = useState<Record<Status, Issue[]>>(() => {
        const initial : Record<Status, Issue[]> = { [Status.Todo]: [], [Status.InProgress]: [], [Status.Review]: [], [Status.Done]: []};
        issues.forEach((issue: Issue) => initial[issue.status].push(issue));
        return initial;
    })
    const previousItems = useRef(columns);
    return (
        <DragDropProvider
        onDragOver={(event) => {
        setColumns((columns) => move(columns, event));
      }}
      onDragEnd={(event) => {
        const {source, target} = event.operation;

        if (event.canceled) {
          if (source?.type === 'item') {
            setColumns(previousItems.current);
          }

          return;
        }

        const issueId = source?.id;
        const newStatus = target?.id;

            if (newStatus){
                router.put(`/projects/${project.id}/issues/${issueId}`, {'status': newStatus}, 
                    {
                onSuccess: () => {
                // Runs if the backend returns a 200/303 redirect
                // 'page' contains the updated props from Laravel
                console.log("Successfully moved the issue!");
                },
                onError: (errors) => {
                // Runs if Laravel validation fails (422 Unprocessable Content)
                console.log("Validation errors:", errors);
                setColumns(previousItems.current);
                // This is where you would roll back your Kanban state!
                },
                onFinish: () => {
                // Runs regardless of success or failure (like 'finally')
                // Good for turning off a loading spinner
                },
                preserveScroll: true, // Prevents the page from jumping to the top
            }
                )
            }


      }}>
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                            {
                                Object.entries(columns).map(([column, issues]) => (
                                    <IssueColumn id={column} key={column}>
                                {issues.map((i, index) => (
                                    <IssueCard issue={i} index={index} column={i.status}/>
                                ))}
                                    </IssueColumn>
                                ))
                            }
                            
                        </div>
                        <CreateIssueForm project_id={project.id}/>
                        {/* <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div> */}
        </div>
        </DragDropProvider>
    )
}