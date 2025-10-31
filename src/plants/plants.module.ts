import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { Plant } from './entities/plant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plant]),
    PassportModule,
    JwtModule,
    ConfigModule
  ],
  controllers: [PlantsController],
  providers: [PlantsService],
  exports: [PlantsService],
})
export class PlantsModule {}
