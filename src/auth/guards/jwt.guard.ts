import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// Guard = "Guardián" que verifica si tienes permiso para entrar
@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Obtener la petición HTTP
    const request = context.switchToHttp().getRequest();
    
    // 2. Extraer el token del header "Authorization: Bearer token123..."
    const token = this.extraerToken(request);
    
    if (!token) {
      throw new UnauthorizedException('Necesitas estar logueado para acceder aquí');
    }

    try {
      // 3. Verificar que el token sea válido
      const datosDelUsuario = this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      // 4. Agregar los datos del usuario a la petición
      // Ahora puedes usar @GetUser() en el controlador
      request.user = datosDelUsuario;
      
      return true; // ✅ Permitir acceso
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  // Función para extraer "token123" de "Bearer token123"
  private extraerToken(request: any): string | undefined {
    const authorization = request.headers.authorization;
    if (!authorization) return undefined;
    
    const [tipo, token] = authorization.split(' ');
    return tipo === 'Bearer' ? token : undefined;
  }
}