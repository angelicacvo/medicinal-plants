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

  // GET ALL - Get all plants (WITHOUT protection)
  @Get()
  findAll() {
    return this.plantsService.findAll();
  }

  // GET BY ID - Get a plant by ID (WITHOUT protection)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantsService.findOne(id);
  }

  // POST - Create new plant (WITH protection - you need to be logged in)
  @UseGuards(JwtGuard) // 🛡️ Only logged users
  @Post()
  create(@Body() createPlantDto: CreatePlantDto, @GetUser() user: any) {
    console.log('User creating the plant:', user);
    return this.plantsService.create(createPlantDto);
  }

  // PUT - Update plant (WITH protection)
  @UseGuards(JwtGuard) // 🛡️ Only logged users
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePlantDto: UpdatePlantDto,
    @GetUser() user: any
  ) {
    console.log('User updating:', user);
    return this.plantsService.update(id, updatePlantDto);
  }

  // DELETE - Delete plant (WITH protection)
  @UseGuards(JwtGuard) // 🛡️ Only logged users
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: any) {
    console.log('User deleting:', user);
    return this.plantsService.remove(id);
  }
}
