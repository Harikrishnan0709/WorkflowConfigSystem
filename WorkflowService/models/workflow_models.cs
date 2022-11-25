namespace WorkflowService.models
{
    public class users
    {
        public int? id { get; set; }
        public string? name { get; set; }
        public string? password { get; set; }
    }
    public class workflow
    {
        public int? id { get; set; }
        public string? name { get; set; }
        public string? description { get; set; }
    }
    public class activity
    {
        public int? id { get; set; }
        public string? name { get; set; }
        public string? caption { get; set; }
        public int? parent_id{ get; set; }
        public string? parent_caption { get; set; }
    }
    public class workflow_user {
        public int? id { get; set; }
        public int? workflowid { get; set; }
        public int? userid { get; set; }
    }
}
