import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseSeeder } from './database.seeder';
import { User } from '../users/entities/user.entity';
import { Plant } from '../plants/entities/plant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Plant])],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder],
})
export class SeederModule {}