import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // Todas las rutas empiezan con /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/register - Crear nueva cuenta
  @Post('register')
  async registrarse(@Body() datosRegistro: RegisterDto) {
    // El DTO automáticamente valida que:
    // - fullName no esté vacío
    // - email sea un email válido
    // - password tenga mínimo 6 caracteres
    return this.authService.register(datosRegistro);
  }

  // POST /auth/login - Iniciar sesión
  @Post('login')
  async iniciarSesion(@Body() datosLogin: LoginDto) {
    // El DTO automáticamente valida que:
    // - email sea un email válido
    // - password no esté vacío
    return this.authService.login(datosLogin);
  }
}
