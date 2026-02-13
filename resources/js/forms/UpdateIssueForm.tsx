import { useForm } from '@inertiajs/react';
import type { Issue} from '@/types/types';
import { Status } from '@/types/types';

// 'project_id',
//         'user_id',
//         'title',
//         'description',
//         'status',
//         'priority',

type UpdateIssueFormProps = {
    issue: Issue;
    project_id: number;
}


export default function UpdateIssueForm({issue, project_id}: UpdateIssueFormProps) {
    const { data, setData, put, processing, errors } = useForm({
        title: issue.title,
        description: issue.description,
        priority: issue.priority,
        status: issue.status
    });

    function submit(e: React.SubmitEvent) {
        e.preventDefault();
        put(`/projects/${project_id}/issues/${issue.id}`);
    }

    return (
        <form onSubmit={submit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium">Issue Name</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="border rounded w-full p-2"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border rounded w-full p-2"
                />
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Priority</label>
                <select value={data.priority} onChange={e=> setData('priority', e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <label className="block text-sm font-medium">Status</label>
                <select value={data.status} onChange={e=> setData('status', e.target.value as Status)}>
                    <option value={Status.Todo}>Todo</option>
                    <option value={Status.InProgress}>In Progress</option>
                    <option value={Status.Review}>Review</option>
                    <option value={Status.Done}>Done</option>
                </select>
                    
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={processing}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Update Issue
            </button>
        </form>
    );
}