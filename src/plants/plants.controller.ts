import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete, 
  ParseIntPipe
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  // GET ALL - Obtener todas las plantas
  @Get()
  findAll() {
    return this.plantsService.findAll();
  }

  // GET BY ID - Obtener una planta por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.findOne(id);
  }

  // POST - Crear nueva planta
  @Post()
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  // PUT - Actualizar planta completa
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePlantDto: UpdatePlantDto
  ) {
    return this.plantsService.update(id, updatePlantDto);
  }

  // DELETE - Eliminar planta
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.remove(id);
  }
}
