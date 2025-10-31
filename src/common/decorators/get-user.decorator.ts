import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Decorator to easily get logged user data
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Returns the data that JwtGuard put in request.user
    return request.user;
  },
);

// USAGE: @GetUser() user: any