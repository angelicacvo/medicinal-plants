import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';
import { LoginDto } from './dto/login.dto';

interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

//vamos a intentarlo de nuevo
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ user: User; accessToken: string }> {
    const user = await this.usersService.create(createUserDto);
    const accessToken = this.signToken(user);
    return { user, accessToken };
  }

  async login(loginDto: LoginDto): Promise<{ user: User; accessToken: string }> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    const accessToken = this.signToken(user);
    return { user, accessToken };
  }

  private async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  private signToken(user: User): string {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role
    };
    return this.jwtService.sign(payload);
  }
}
