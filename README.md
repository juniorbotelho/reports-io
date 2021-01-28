## Checklist
- Suggestions and minor corrections
  - [ ] Update typing files into single files #22
  - [ ] Solve problem with user controller #18
  - [ ] Check if the user exists when the email is validated #16
  - [ ] Solve the problem with 'path aliases' at the time of build #8
  - [ ] Improve responsiveness on devices with much smaller screens #7
  - [ ] Troubleshoot notification cards #6, #4 and #5

## Create database configuration
This project uses TypeORM with a database manager, so it is necessary to create a file called `ormconfig.json` at the root of the project, within it the following configuration parameters will be needed.

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
