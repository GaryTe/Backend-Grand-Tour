export enum EnvValidationMessageForPostgres {
  PostgresType = 'Specify the environment variable POSTGRES_TYPE in the file .env. Value the environment variable POSTGRES_TYPE can be "postgres".',
  PostgresHost = 'Specify the environment variable HOST in the file .env.',
  PostgresPort = 'Specify the environment variable POSTGRES_PORT in the file .env. The min value port 1000, max value port 6000.',
  PostgresUsername = 'Specify the environment variable POSTGRES_USERNAME in the file .env.',
  PostgresPassword = 'Specify the environment variable POSTGRES_PASSWORD in the file .env.',
  PostgresDatabase = 'Specify the environment variable POSTGRES_DB in the file .env.',
  PostgresEmail = 'Specify the environment variable PGADMIN_EMAIL in the file .env, or incorrectly specify the environment variable PGADMIN_EMAIL',
}
