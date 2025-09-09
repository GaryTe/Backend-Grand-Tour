import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export function getPostgresOptions() {
  return {
    useFactory: (
      config: ConfigService,
    ) => {
      return {
        type: config.get<string>('dbPostgres.type'),
        host: config.get<string>('dbPostgres.host'),
        port: config.get<number>('dbPostgres.port'),
        username: config.get<string>('dbPostgres.username'),
        password: config.get<string>('dbPostgres.password'),
        database: config.get<string>('dbPostgres.database'),
        entities: [],
        synchronize: true,
      };
    },
    inject: [ConfigService],
  };
}
