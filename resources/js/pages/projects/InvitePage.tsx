import UpdateIssueForm from '@/forms/UpdateIssueForm';
import AppLayout from '@/layouts/app-layout';
import { projects } from '@/routes';
import type { BreadcrumbItem } from '@/types/navigation';
import type { Issue, Project } from '@/types/types';
import { useForm } from '@inertiajs/react'


interface InvitePageProps {
    project: Project;
}

// COME BACK TO FIX THIS


export default function InvitePage({ project }: InvitePageProps) {
    const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Issues',
        href: projects().url,
    },
];
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    });

    const submit = (e : React.SubmitEvent) => {
        e.preventDefault();
        
        // 2. Send the POST request to your Laravel route
        post(route('projects.invitations.store', project.id), {
            onSuccess: () => reset(), // Clear the form on success
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <form onSubmit={submit} className="max-w-md space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Invite by Email
                </label>
                <input
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeholder="teammate@example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                
                {/* 3. Display Laravel validation errors automatically */}
                {errors.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
            </div>

            <button
                type="submit"
                disabled={processing}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
            >
                {processing ? 'Sending...' : 'Send Invitation'}
            </button>
        </form>
        </AppLayout>
        
    );
}