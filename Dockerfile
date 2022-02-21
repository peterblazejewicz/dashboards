FROM node:16-alpine AS node
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "decorate-angular-cli.js", "./"]
RUN npm ci
COPY . .
RUN npm run build

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["backend/Dashboards.csproj", "backend/"]
RUN dotnet restore "backend/Dashboards.csproj"
COPY . .
WORKDIR "/src/server"
RUN dotnet build "Dashboards.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Dashboards.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node /usr/src/app/frontend/ .
ENTRYPOINT ["dotnet", "Dashboards.dll"]
