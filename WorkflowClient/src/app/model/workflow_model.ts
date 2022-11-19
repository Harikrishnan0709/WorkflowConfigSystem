export class user {
    public id?: number;
    public name?: string;
    public password?: string;
}

export class workflow {
    public id?: number;
    public name?: string = '';
    public description?: string;
    public createdon?: string;
}

export class workflow_user {
    public id?: number;
    public workflowid?: number;
    public userid?: number;
}