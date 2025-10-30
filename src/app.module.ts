import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { Plant } from './plants/entities/plant.entity';

@Module({
  imports: [
    // 1️⃣ Habilitamos ConfigModule para usar variables de entorno (.env)
    ConfigModule.forRoot({
      isGlobal: true, // Hace que process.env esté disponible en toda la app
    }),

    // 2️⃣ Configuramos TypeORM con PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Plant],
      synchronize: true, // ⚠️ crea tablas automáticamente (solo en desarrollo)
      logging: true,     // muestra las consultas SQL en la consola
    }),

    // 3️⃣ Módulos propios
    PlantsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
