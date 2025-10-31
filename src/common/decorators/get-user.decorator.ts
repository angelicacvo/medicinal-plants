import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Decorator para obtener fácilmente los datos del usuario logueado
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Retorna los datos que el JwtGuard puso en request.user
    return request.user;
  },
);

// USO: @GetUser() usuario: any