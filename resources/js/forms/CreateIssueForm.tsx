import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue, SelectContent} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';


// 'project_id',
//         'user_id',
//         'title',
//         'description',
//         'status',
//         'priority',

type CreateIssueFormProps = {
    project_id: number;
}


export default function CreateIssueForm({project_id}: CreateIssueFormProps) {
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
        <form onSubmit={submit} className="space-y-4 max-w-md border rounded-xl p-4">
            <div>
                {/* <label className="block text-sm font-medium">Issue Name</label> */}
                {/* <input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="border rounded w-full p-2"
                /> */}

                 <Field>
                    <FieldLabel htmlFor='issuename'>Issue Name</FieldLabel>
                    <Input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="border rounded w-full p-2"
                    />
                    <FieldDescription></FieldDescription>
                </Field>
                 {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                )}
        
            </div>

            <div>
                 <Field>
                    <FieldLabel htmlFor='description'>Description</FieldLabel>
                    <Textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border rounded w-full p-2"
                    />
                    <FieldDescription></FieldDescription>
                </Field>
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>

            <div>
                <Field className='w-full max-w-xs'>
                    <FieldLabel htmlFor='priority'>Priority</FieldLabel>
                    <Select value={data.priority} onValueChange={value=> setData('priority', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose Priority" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Low">Low</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                    
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>
            {/* <h2>Priority selected {data.priority}</h2> */}

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