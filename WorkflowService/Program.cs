using Microsoft.AspNetCore.Authentication.Negotiate;
using Dapper;
using Microsoft.Data.SqlClient;
using WorkflowService.models;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json");
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();
app.UseAuthorization(); 

var connectionString = app.Configuration.GetSection("ConnectionStrings").GetSection("WorkflowDB").Value;

app.MapGet("/", () =>
{
    return "Workflow Service v1.0";
});

app.MapGet("/user/{username}", (string username) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.users where name = '" + username + "'");
        return workflow;
    }
});

app.MapPost("/user/add", (users user) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("insert into master.users(name, password) " +
            "values ({0}, {1}", user.name, user.password));
        return workflow;
    }
});

app.MapGet("/user/{user_id}/workflow/all", (int user_id) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.workflow");
        return workflow;
    }
});

app.MapGet("/user/{user_id}/workflow/{workflow_id}", (int user_id, int workflow_id) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("SELECT * FROM master.workflow " +
            "where id = {0} and id in (select workflowid from map.workflow_user where userid = {1})", workflow_id, user_id));
        return workflow;
    }
});

app.MapPost("user/{user_id}/add_workflow/{workflow_id}", (workflow_user wuser) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("insert into map.worklow_user(workflowid, userid) " +
            "values ({0}, {1})", wuser.workflowid, wuser.userid));
        return workflow;
    }
});


app.MapGet("/workflow/all", () =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.workflow");
        return workflow;
    }
});

app.MapGet("/workflow/{id}", (int id) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.workflow where id = " + id);
        return workflow;
    }
});

app.MapPost("workflow/add", (workflow wf) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("insert into master.workflow(name, description) " +
            "values ('{0}', '{1}')", wf.name, wf.description));
        return workflow;
    }
});

app.MapDelete("workflow/delete", (int id) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("delete from master.workflow where id = {0}", id));
        return workflow;
    }
});


app.MapPost("workflow/{id}/activity/add", (activity a) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query(string.Format("insert into master.activity(name, caption, parentid) " +
            "values ('{0}', '{1}', (select top 1 isnull(id, 0) from master.activity where name = '{2}'))", a.name, a.caption, a.parent_caption));
        return workflow;
    }
});

app.UseSwagger();
app.UseSwaggerUI();
app.Run();