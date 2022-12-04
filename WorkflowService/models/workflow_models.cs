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
    public class workflow_user
    {
        public int? id { get; set; }
        public int? workflow_id { get; set; }
        public int? userid { get; set; }
    }
    public class activity
    {
        public int? id { get; set; }
        public string? name { get; set; }
        public string? caption { get; set; }
        public string? description { get; set; }
        public int? parent_id { get; set; }
    }
    public class workflow_activity
    {
        public int? id { get; set; }
        public int? workflow_id { get; set; }
        public int? activity_id { get; set; }
        public string? type { get; set; }
    }
    public class control
    {
        public int? id { get; set; }
        public int? activity_id { get; set; }
        public string? name { get; set; }
        public string? caption { get; set; }
        public string? control_type { get; set; }
        public bool? enabled { get; set; }
        public bool? visible { get; set; }
        public int? parent_id { get; set; }
    }
    public class entity
    {
        public int? id { get; set; }
        public string? name { get; set; }
    }
    public class entity_attribute
    {
        public int? id { get; set;}
        public int? entity_id { get; set; }
        public string? name { get; set; }
        public string? data_type { get; set; }
    }
}
