## Create database configution
#
This project uses TypeORM with a database manager, so it is necessary to create a file called `ormconfig.json` at the root of the project, within it the following configuration parameters will be needed.
#
```json
{
  "type": "mysql",
  "host": "",
  "port": 3306,
  "username": "",
  "password": "",
  "database": "",
  "synchronize": true,
  "logging": false,
  "entities": ["app/models/**/*.ts"],
  "migrations": ["app/migrations/**/*.ts"],
  "subscribers": ["app/subscribers/**/*.ts"],
  "cli": {
    "entitiesDir": "app/models",
    "migrationsDir": "app/migrations",
    "subscribersDir": "app/subscribers"
  }
}
```
