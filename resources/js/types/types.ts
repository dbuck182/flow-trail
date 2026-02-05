
export type Project = {
    id : number,
    name : string,
    description? : string | null
}

export type Issue = {
    id : number,
    project_id: number,
    creator_id: number,
    assignee_id?: number,
    title: string,
    description: string,
    status: string,
    priority: string
}