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

export class activity {
    public id?: number;
    public name?: string = '';
    public caption?: string = '';
    public parent_id?: number;
    public parent_caption?: string = '';

}
export class workflow_user {
    public id?: number;
    public workflowid?: number;
    public userid?: number;
}