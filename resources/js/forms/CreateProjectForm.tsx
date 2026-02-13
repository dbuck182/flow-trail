import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function CreateProjectForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    function submit(e: React.SubmitEvent) {
        e.preventDefault();
        post('/projects');
    }

    return (
        <form onSubmit={submit} className="space-y-4 max-w-sm">
            <div>
                <Field>
                    <FieldLabel htmlFor='projectname'>Project Name</FieldLabel>
                    <Input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="border rounded w-full p-2"
                    />
                    <FieldDescription></FieldDescription>
                    <FieldError></FieldError>
                </Field>
        
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                )}
            </div>

            <div>
                {/* <label className="block text-sm font-medium">Description</label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border rounded w-full p-2"
                /> */}
                <Field>
                    <FieldLabel htmlFor='description'>Description</FieldLabel>
                    <Textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border rounded w-full p-2"
                    />
                    <FieldDescription></FieldDescription>
                    <FieldError></FieldError>
                </Field>
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>

            <Button
                type="submit"
                disabled={processing}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Create Project
            </Button>
        </form>
    );
}
