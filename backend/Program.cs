using Auth0.AspNetCore.Authentication;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddRazorPages();


builder.Services.AddAuth0WebAppAuthentication(options => {
  options.Domain = builder.Configuration["Auth0:Domain"];
  options.ClientId = builder.Configuration["Auth0:ClientId"];
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Error");
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions {
  FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "../dist")),
  RequestPath = "/dist"
});

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.Run();
