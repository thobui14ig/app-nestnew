import { TestModule } from './modules/test/test.module';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mssql',
          host: 'localhost',
          port: 1433,
          username: 'abc',
          password: '1234',
          database: 'nhahang',
          entities: ["dist/modules/**/*.entity{.ts,.js}"],
          "migrationsTableName": "custom_migration_table",
          "migrations": ["migration/*.js"],

          synchronize: true,
          logging:"all",
          autoLoadEntities: true,
          options: { encrypt: false },
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),

    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UsersModule, AuthModule, TestModule
  ],
})

export class AppModule{}
