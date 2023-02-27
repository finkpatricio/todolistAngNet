using Microsoft.EntityFrameworkCore;
using TodoListApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var cs = builder.Configuration.GetConnectionString("ItemsDB");
builder.Services.AddDbContext<TodoContext>(opt =>
{
    opt.UseSqlServer(cs);
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("cors", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("cors");
app.UseAuthorization();

app.MapControllers();

app.Run();
