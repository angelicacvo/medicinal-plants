import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth') // All routes start with /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/register - Create new account
  @Post('register')
  @ApiOperation({ 
    summary: 'Register a new user',
    description: 'Create a new user account with full name, email, and password'
  })
  @ApiBody({ 
    type: RegisterDto,
    description: 'User registration data'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'User registered successfully',
    schema: {
      example: {
        message: 'User registered successfully',
        user: {
          id: 1,
          fullName: 'John Doe',
          email: 'john.doe@example.com'
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
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
  async register(@Body() registerData: RegisterDto) {
    // DTO automatically validates that:
    // - fullName is not empty
    // - email is a valid email
    // - password has at least 6 characters
    return this.authService.register(registerData);
  }

  // POST /auth/login - Sign in
  @Post('login')
  @ApiOperation({ 
    summary: 'Login user',
    description: 'Authenticate user with email and password'
  })
  @ApiBody({ 
    type: LoginDto,
    description: 'User login credentials'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Login successful',
    schema: {
      example: {
        message: 'Login successful',
        user: {
          id: 1,
          fullName: 'John Doe',
          email: 'john.doe@example.com'
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      }
    }
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Incorrect email or password' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Validation error' 
  })
  async login(@Body() loginData: LoginDto) {
    // DTO automatically validates that:
    // - email is a valid email
    // - password is not empty
    return this.authService.login(loginData);
  }
}
