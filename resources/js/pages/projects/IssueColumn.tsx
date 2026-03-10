import { useDroppable } from "@dnd-kit/react";
import {CollisionPriority} from '@dnd-kit/abstract';

interface IssueColumnProps {
    id: string;
    children: React.ReactNode
}


export default function IssueColumn({id, children}: IssueColumnProps){
    const {isDropTarget, ref} = useDroppable({
        id,
        type: 'column',
        accept: 'item',
        collisionPriority: CollisionPriority.High
    });
    const style = {
    minHeight: '200px', // Prevents collapse
    width: '100%',      // Keeps width consistent
    gap: '10px',
    padding: '10px',
};
    return (
        <div className="relative rounded-xl border border-sidebar-border/70 dark:border-sidebar-border flex flex-col items-center p-2 gap-1">
            <h2>{id}</h2>
            <div ref={ref} className='Column border' style={style}>
                    {children}
            </div>
        </div>
    )
}