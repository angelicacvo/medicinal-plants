import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // All routes start with /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/register - Create new account
  @Post('register')
  async register(@Body() registerData: RegisterDto) {
    // DTO automatically validates that:
    // - fullName is not empty
    // - email is a valid email
    // - password has at least 6 characters
    return this.authService.register(registerData);
  }

  // POST /auth/login - Sign in
  @Post('login')
  async login(@Body() loginData: LoginDto) {
    // DTO automatically validates that:
    // - email is a valid email
    // - password is not empty
    return this.authService.login(loginData);
  }
}
