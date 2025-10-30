import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PlantsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
