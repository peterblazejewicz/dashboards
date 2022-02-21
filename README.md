# Dashboards

Proving ground type of dotnet core web application with multiple client applications built with Angular and modern web tech.

## Features

- Dotnet Core 6.\* web application with minimal api
- Authentication with Auth0 (cookie based)
- Razor pages (no controllers)
- Angular 13 (or newer) multiple client applications
- SCSS (Sass) library for styling (shared both backend/client)
- hot reload support for Dotnet web app client application (in development)
- content (string/variable) replacement for Angular client applications
- Angular client applications with routing
- Nx workspace support

### Cascading styles implementation

- top level stylesheet created by the shared library and used directly in razor page layout template(s). Not referenced directly within client applications, with exception of Karma tests.
- every razor template has scoped  dotnet 6.0 style to override details from global stylesheet
- application level styles compiled from app specific `.scss` file
- per component styles overriding details of global styles (inline or from `.scss` file)

## Author

@peterblazejewicz
