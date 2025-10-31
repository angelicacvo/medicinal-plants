import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptUtil } from '../common/utils/bcrypt.util';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Para manejar usuarios
    private jwtService: JwtService,     // Para crear tokens JWT
  ) {}

  // REGISTRO: Crear nueva cuenta
  async register(registerDto: RegisterDto) {
    // 1. Encriptar la contraseña para seguridad
    const passwordEncriptado = await BcryptUtil.encriptarPassword(registerDto.password);

    // 2. Crear el usuario con la contraseña encriptada
    const nuevoUsuario = await this.usersService.create({
      fullName: registerDto.fullName,
      email: registerDto.email,
      password: passwordEncriptado, // Guardamos la versión encriptada
    });

    // 3. Crear un token JWT para que no tenga que volver a hacer login
    const token = this.crearToken(nuevoUsuario);

    // 4. Devolver respuesta (SIN la contraseña por seguridad)
    return {
      mensaje: 'Usuario registrado exitosamente',
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.fullName,
        email: nuevoUsuario.email,
      },
      token: token,
    };
  }

  // LOGIN: Verificar credenciales
  async login(loginDto: LoginDto) {
    // 1. Buscar el usuario por email
    const usuario = await this.usersService.findByEmail(loginDto.email);
    if (!usuario) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    // 2. Verificar que la contraseña sea correcta
    const passwordCorrecta = await BcryptUtil.compararPassword(
      loginDto.password,        // Lo que escribió el usuario
      usuario.password         // Lo que está guardado en la BD (encriptado)
    );

    if (!passwordCorrecta) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    // 3. Si todo está bien, crear un token
    const token = this.crearToken(usuario);

    // 4. Devolver respuesta exitosa
    return {
      mensaje: 'Login exitoso',
      usuario: {
        id: usuario.id,
        nombre: usuario.fullName,
        email: usuario.email,
      },
      token: token,
    };
  }

  // Función privada para crear tokens JWT
  private crearToken(usuario: any): string {
    const datosDelToken = {
      sub: usuario.id,           // "sub" = subject (ID del usuario)
      email: usuario.email,
      nombre: usuario.fullName,
    };
    
    return this.jwtService.sign(datosDelToken);
  }
}
