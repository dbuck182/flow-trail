
export type Project = {
    id : number,
    name : string,
    description? : string | null
}

export enum Status {
    Todo = 'todo',
    InProgress = 'in progress',
    Review = 'review',
    Done = 'done'
}

export type Issue = {
    id : number,
    project_id: number,
    creator_id: number,
    assignee_id?: number,
    title: string,
    description: string,
    status: Status,
    priority: string
}