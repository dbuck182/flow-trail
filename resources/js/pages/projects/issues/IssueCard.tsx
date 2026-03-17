import type {UniqueIdentifier} from "@dnd-kit/core"
import {useSortable} from '@dnd-kit/react/sortable'
import { Link } from "@inertiajs/react";
import type { Issue } from "@/types/types"


type IssueCardProps = {
    issue: Issue;
    column: UniqueIdentifier;
    index: number;
    key: number;
}

export default function IssueCard({issue, index ,column, key}: IssueCardProps) {
    // Just the issue id for now
    const {ref, isDragging} = useSortable({
        id: issue.id,
        index,
        type: 'item',
        accept: 'item',
        group: column
    })
    return (
        <div key={key} ref={ref} data-dragging={isDragging} className="border rounded p-1 flex flex-row gap-3">
                <h2>{issue.title}</h2>
                <Link key={issue.id} className="ml-auto"
                
                href={`/projects/${issue.project_id}/issues/${issue.id}`}>
                    Edit
                </Link>
        </div>
        
    )
}