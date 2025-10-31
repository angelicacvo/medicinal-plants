import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpCode, 
  HttpStatus,
  Query,
  ParseIntPipe
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.plantsService.findAll();
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  search(@Query('name') name: string) {
    return this.plantsService.searchByName(name);
  }

  @Get('user/:userId')
  @HttpCode(HttpStatus.OK)
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.plantsService.findByUser(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePlantDto: UpdatePlantDto
  ) {
    return this.plantsService.update(id, updatePlantDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.remove(id);
  }
}
