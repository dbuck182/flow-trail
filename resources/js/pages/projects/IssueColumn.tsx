import { useDroppable } from "@dnd-kit/react";

interface IssueColumnProps {
    id: string;
    children: React.ReactNode
}


export default function IssueColumn({id, children}: IssueColumnProps){
    const {ref} = useDroppable({
        id,
    });

    return (
        <div ref={ref} className="relative rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center p-2 gap-1">
            <h2>{id}</h2>
            <div className='flex flex-col'>
                    {children}
            </div>
        </div>
    )
}