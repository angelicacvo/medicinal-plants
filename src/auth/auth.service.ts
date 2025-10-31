import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptUtil } from '../common/utils/bcrypt.util';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // To manage users
    private jwtService: JwtService,     // To create JWT tokens
  ) {}

  // REGISTER: Create new account
  async register(registerDto: RegisterDto) {
    // 1. Encrypt password for security
    const hashedPassword = await BcryptUtil.hashPassword(registerDto.password);

    // 2. Create user with encrypted password
    const newUser = await this.usersService.create({
      fullName: registerDto.fullName,
      email: registerDto.email,
      password: hashedPassword, // Save the encrypted version
    });

    // 3. Create JWT token so user doesn't need to login again
    const token = this.createToken(newUser);

    // 4. Return response (WITHOUT password for security)
    return {
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
      token: token,
    };
  }

  // LOGIN: Verify credentials
  async login(loginDto: LoginDto) {
    // 1. Find user by email
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    // 2. Verify password is correct
    const isPasswordCorrect = await BcryptUtil.comparePassword(
      loginDto.password,        // What user entered
      user.password         // What's stored in DB (encrypted)
    );

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    // 3. If everything is correct, create token
    const token = this.createToken(user);

    // 4. Return successful response
    return {
      message: 'Login successful',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
      token: token,
    };
  }

  // Private function to create JWT tokens
  private createToken(user: any): string {
    const tokenData = {
      sub: user.id,           // "sub" = subject (user ID)
      email: user.email,
      fullName: user.fullName,
    };
    
    return this.jwtService.sign(tokenData);
  }
}
