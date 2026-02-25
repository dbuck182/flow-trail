import type { Issue } from "@/types/types"
import {useDraggable} from '@dnd-kit/react'
import { Link } from "@inertiajs/react";



type IssueCardProps = {
    issue: Issue;
}

export default function IssueCard({issue}: IssueCardProps) {
    // Just the issue id for now
    const {ref} = useDraggable({
        id: issue.id
    })
    return (
        <div ref={ref}>
            <div className='border rounded p-1'>
                <h2>{issue.title}</h2>
            </div>
        {/* <Link key={issue.id}
                href={`/projects/${issue.project_id}/issues/${issue.id}`}>
        </Link> */}
        </div>
        
    )
}