import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { Plant } from './plant.entity';

@Controller('plants')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createPlantDto: CreatePlantDto): Promise<Plant> {
    return this.plantsService.create(createPlantDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Analyst)
  findAll(): Promise<Plant[]> {
    return this.plantsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Analyst)
  findOne(@Param('id') id: string): Promise<Plant> {
    return this.plantsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(
    @Param('id') id: string,
    @Body() updatePlantDto: UpdatePlantDto
  ): Promise<Plant> {
    return this.plantsService.update(id, updatePlantDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string): Promise<void> {
    return this.plantsService.remove(id);
  }
}
