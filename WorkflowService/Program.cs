using Microsoft.AspNetCore.Authentication.Negotiate;
using Dapper;
using System.Data;
using Microsoft.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
   .AddNegotiate();
builder.Configuration.AddJsonFile("appsettings.json");
builder.Services.AddAuthorization(options =>
{
    // By default, all incoming requests will be authorized according to the default policy.
    // options.FallbackPolicy = options.DefaultPolicy;
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

var connectionString = app.Configuration.GetSection("ConnectionStrings").GetSection("WorkflowDB").Value;

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateTime.Now.AddDays(index),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
});

app.MapPost("/user/add", (object user) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.workflow");
        return workflow;
    }
});

app.MapGet("/user/{userId}/workflow/all", (int userId) =>
{
    using (var sqlConnection = new SqlConnection(connectionString))
    {
        var workflow = sqlConnection.Query("SELECT * FROM master.workflow");
        return workflow;
    }
});

app.Run();

internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}



