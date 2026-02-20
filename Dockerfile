# Build Blazor WebAssembly app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY *.sln ./
COPY *.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app/publish

# Serve static output with a PORT-aware server for Railway
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/publish/wwwroot ./

ENV PORT=8080
EXPOSE 8080
CMD ["sh", "-c", "serve -s /app -l tcp://0.0.0.0:${PORT:-8080}"]
