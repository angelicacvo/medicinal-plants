import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { SeederModule } from './seeder.module';
import { DatabaseSeeder } from './database.seeder';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT'),
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        synchronize: true, // TEMPORAL: Crea las tablas automáticamente
        autoLoadEntities: true,
        logging: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      inject: [ConfigService],
    }),
    SeederModule,
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(
    private dataSource: DataSource,
    private databaseSeeder: DatabaseSeeder,
  ) {}
  
  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('✅ Database connected successfully');
      
      // Ejecutar seeder automáticamente
      try {
        await this.databaseSeeder.seed();
      } catch (error) {
        console.error('❌ Error durante el seeding:', error);
      }
    } else {
      console.log('❌ Database connection failed');
    }
  }
}
