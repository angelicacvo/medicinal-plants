import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// DTO = Define WHAT data I need for REGISTRATION
export class RegisterDto {
  @IsNotEmpty({ message: 'Full name is required' })
  fullName: string;

  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  password: string;
}