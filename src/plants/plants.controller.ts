import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete, 
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  // GET ALL - Obtener todas las plantas (SIN protección)
  @Get()
  findAll() {
    return this.plantsService.findAll();
  }

  // GET BY ID - Obtener una planta por ID (SIN protección)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.findOne(id);
  }

  // POST - Crear nueva planta (CON protección - necesitas estar logueado)
  @UseGuards(JwtGuard) // 🛡️ Solo usuarios logueados
  @Post()
  create(@Body() createPlantDto: CreatePlantDto, @GetUser() usuario: any) {
    console.log('Usuario que está creando la planta:', usuario);
    return this.plantsService.create(createPlantDto);
  }

  // PUT - Actualizar planta (CON protección)
  @UseGuards(JwtGuard) // 🛡️ Solo usuarios logueados
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePlantDto: UpdatePlantDto,
    @GetUser() usuario: any
  ) {
    console.log('Usuario que está actualizando:', usuario);
    return this.plantsService.update(id, updatePlantDto);
  }

  // DELETE - Eliminar planta (CON protección)
  @UseGuards(JwtGuard) // 🛡️ Solo usuarios logueados
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() usuario: any) {
    console.log('Usuario que está eliminando:', usuario);
    return this.plantsService.remove(id);
  }
}
