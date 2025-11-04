import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { User } from './users/user.entity';
import { Plant } from './plants/plant.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'postgres',
        database: process.env.DB_NAME || 'medicinal_plants',
        entities: [User, Plant],
        synchronize: process.env.TYPEORM_SYNC === 'true'
      })
    }),
    UsersModule,
    AuthModule,
    PlantsModule
  ]
})
export class AppModule {}
