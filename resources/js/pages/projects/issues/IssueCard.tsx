import type { Issue } from "@/types/types"



type IssueCardProps = {
    issue: Issue;
}

export default function IssueCard({issue}: IssueCardProps) {
    return (
        <div className='border rounded p-1'>
            <h2>{issue.title}</h2>
        </div>
    )
}