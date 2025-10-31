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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody } from '@nestjs/swagger';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@ApiTags('plants')
@UseGuards(JwtGuard) // 🛡️ All routes protected
@ApiBearerAuth()
@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  // GET ALL - Get all plants (WITH protection)
  @Get()
  @ApiOperation({ 
    summary: 'Get all plants',
    description: 'Retrieve a list of all medicinal plants (authentication required)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'List of plants retrieved successfully',
    schema: {
      example: [
        {
          id: 1,
          name: 'Chamomile',
          species: 'Matricaria chamomilla',
          description: 'Excellent for digestive problems...',
          userId: 1
        }
      ]
    }
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  findAll(@GetUser() user: any) {
    return this.plantsService.findAll();
  }

  // GET BY ID - Get a plant by ID (WITH protection)
  @Get(':id')
  @ApiOperation({ 
    summary: 'Get plant by ID',
    description: 'Retrieve a specific medicinal plant by its ID (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Plant ID',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Plant found successfully',
    schema: {
      example: {
        id: 1,
        name: 'Chamomile',
        species: 'Matricaria chamomilla',
        description: 'Excellent for digestive problems...',
        userId: 1
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Plant not found' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: any) {
    return this.plantsService.findOne(id);
  }

  // POST - Create new plant (WITH protection - you need to be logged in)
  @Post()
  @ApiOperation({ 
    summary: 'Create new plant',
    description: 'Create a new medicinal plant (authentication required)'
  })
  @ApiBody({ 
    type: CreatePlantDto,
    description: 'Plant data'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Plant created successfully',
    schema: {
      example: {
        id: 1,
        name: 'Chamomile',
        species: 'Matricaria chamomilla',
        description: 'Excellent for digestive problems...',
        userId: 1
      }
    }
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Plant already exists or validation error' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  create(@Body() createPlantDto: CreatePlantDto, @GetUser() user: any) {
    console.log('User creating the plant:', user);
    return this.plantsService.create(createPlantDto);
  }

  // PUT - Update plant (WITH protection)
  @Put(':id')
  @ApiOperation({ 
    summary: 'Update plant',
    description: 'Update an existing medicinal plant (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Plant ID to update',
    example: 1
  })
  @ApiBody({ 
    type: UpdatePlantDto,
    description: 'Updated plant data'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Plant updated successfully' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Plant not found' 
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Plant already exists' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePlantDto: UpdatePlantDto,
    @GetUser() user: any
  ) {
    console.log('User updating:', user);
    return this.plantsService.update(id, updatePlantDto);
  }

  // DELETE - Delete plant (WITH protection)
  @Delete(':id')
  @ApiOperation({ 
    summary: 'Delete plant',
    description: 'Delete a medicinal plant (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Plant ID to delete',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Plant deleted successfully',
    schema: {
      example: {
        message: 'Plant number 1 deleted successfully'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Plant not found' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: any) {
    console.log('User deleting:', user);
    return this.plantsService.remove(id);
  }
}
