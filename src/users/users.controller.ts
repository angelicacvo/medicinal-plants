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
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@ApiTags('users')
@UseGuards(JwtGuard) // 🛡️ All routes protected
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET ALL - Get all users (WITH protection)
  @Get()
  @ApiOperation({ 
    summary: 'Get all users',
    description: 'Retrieve a list of all registered users (authentication required)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'List of users retrieved successfully',
    schema: {
      example: [
        {
          id: 1,
          fullName: 'John Doe',
          email: 'john.doe@example.com'
        }
      ]
    }
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  findAll(@GetUser() user: any) {
    return this.usersService.findAll();
  }

  // GET BY ID - Get a user by ID (WITH protection)
  @Get(':id')
  @ApiOperation({ 
    summary: 'Get user by ID',
    description: 'Retrieve a specific user by their ID (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'User ID',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'User found successfully',
    schema: {
      example: {
        id: 1,
        fullName: 'John Doe',
        email: 'john.doe@example.com'
      }
    }
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: any) {
    return this.usersService.findOne(id);
  }

  // POST - Create new user (WITH protection)
  @Post()
  @ApiOperation({ 
    summary: 'Create new user',
    description: 'Create a new user account (authentication required - admin only)'
  })
  @ApiBody({ 
    type: CreateUserDto,
    description: 'User data'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'User created successfully',
    schema: {
      example: {
        id: 1,
        fullName: 'John Doe',
        email: 'john.doe@example.com'
      }
    }
  })
  @ApiResponse({ 
    status: 409, 
    description: 'User already exists' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Validation error' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  create(@Body() createUserDto: CreateUserDto, @GetUser() user: any) {
    return this.usersService.create(createUserDto);
  }

  // PUT - Update complete user (WITH protection)
  @Put(':id')
  @ApiOperation({ 
    summary: 'Update user',
    description: 'Update an existing user information (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'User ID to update',
    example: 1
  })
  @ApiBody({ 
    type: UpdateUserDto,
    description: 'Updated user data'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'User updated successfully' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Email already in use' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Validation error' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: any
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // DELETE - Delete user (WITH protection)
  @Delete(':id')
  @ApiOperation({ 
    summary: 'Delete user',
    description: 'Delete a user account and all associated data (authentication required)'
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'User ID to delete',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'User deleted successfully' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized - JWT token required' 
  })
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: any) {
    return this.usersService.remove(id);
  }
}
