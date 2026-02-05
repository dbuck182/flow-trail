import { useForm } from '@inertiajs/react';


// 'project_id',
//         'user_id',
//         'title',
//         'description',
//         'status',
//         'priority',

type CreateProjectFormProps = {
    project_id: number;
}


export default function CreateProjectForm({project_id}: CreateProjectFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        priority: 'Low'
    });

    function submit(e: React.SubmitEvent) {
        e.preventDefault();
        post(`/projects/${project_id}/issues`);
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
                    
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>
            <h2>Priority selected {data.priority}</h2>

            <button
                type="submit"
                disabled={processing}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Create Issue
            </button>
        </form>
    );
}