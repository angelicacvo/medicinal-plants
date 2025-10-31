import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// Guard = "Guardian" that verifies if you have permission to enter
@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Get HTTP request
    const request = context.switchToHttp().getRequest();
    
    // 2. Extract token from header "Authorization: Bearer token123..."
    const token = this.extractToken(request);
    
    if (!token) {
      throw new UnauthorizedException('You need to be logged in to access here');
    }

    try {
      // 3. Verify token is valid
      const userData = this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      // 4. Add user data to request
      // Now you can use @GetUser() in controller
      request.user = userData;
      
      return true; // ✅ Allow access
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  // Function to extract "token123" from "Bearer token123"
  private extractToken(request: any): string | undefined {
    const authorization = request.headers.authorization;
    if (!authorization) return undefined;
    
    const [type, token] = authorization.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}