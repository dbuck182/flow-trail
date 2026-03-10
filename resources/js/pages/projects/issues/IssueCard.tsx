import type { Issue } from "@/types/types"
import {useSortable} from '@dnd-kit/react/sortable'
import { Link } from "@inertiajs/react";
import {UniqueIdentifier} from "@dnd-kit/core"


type IssueCardProps = {
    issue: Issue;
    column: UniqueIdentifier;
    index: number;
}

export default function IssueCard({issue, index ,column}: IssueCardProps) {
    // Just the issue id for now
    const {ref, isDragging} = useSortable({
        id: issue.id,
        index,
        type: 'item',
        accept: 'item',
        group: column
    })
    return (
        <div ref={ref} data-dragging={isDragging}>
            <div className='border rounded p-1'>
                <h2>{issue.title}</h2>
            </div>
        {/* <Link key={issue.id}
                href={`/projects/${issue.project_id}/issues/${issue.id}`}>
        </Link> */}
        </div>
        
    )
}