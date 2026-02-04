import { Project } from '@/types/types';

interface ShowProps {
    project: Project;
}

export default function Show({ project }: ShowProps) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{project.name}</h1>

            <p className="mt-2 text-gray-600">
                {project.description}
            </p>

            <h2 className="mt-6 text-xl font-semibold">Issues</h2>

            {/* <ul className="mt-2 space-y-2">
                {project.issues?.map(issue => (
                    <li key={issue.id}>
                        {issue.title}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
