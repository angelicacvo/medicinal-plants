import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DatabaseSeeder } from '../database/database.seeder';

async function runSeeder() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(DatabaseSeeder);
  
  try {
    await seeder.seed();
    console.log('🌱 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await app.close();
  }
}

runSeeder();