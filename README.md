# Contact List

> Simple contacts CRUD with MongoDB, ASP.NET Core and ReactJS

![Contacts page](./Screenshots/home-page.png)
![Edit page](./Screenshots/edit-page.png)

## Getting started

Restore dotnet packages running:

```
dotnet restore ./ContactList.WebApi
```

Place a mongo connection string in appsettings.Development.json located in ContactList.WebApi directory.
Example:

```json
"ContactsDatabaseSettings": {
    "ContactsCollectionName": "Contacts",
    "ConnectionString": "{Connection string here}",
    "DatabaseName": "ContactListDb"
},
```

Run the web api app

```
dotnet run --project ./ContactList.WebApi
```

Install frontend packages running:

```
yarn --cwd ./web-client
```

Run the frontend app

```
yarn --cwd ./web-client start
```

## Built with

-   ASP.NET Core
    -   [MongoDB.Drive](https://github.com/mongodb/mongo-csharp-driver)
-   ReactJS
    -   [Typescript](https://www.typescriptlang.org/)
    -   [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
    -   [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react)
