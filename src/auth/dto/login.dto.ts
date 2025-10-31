import { IsEmail, IsNotEmpty } from 'class-validator';

// DTO = Define WHAT data I need for LOGIN
export class LoginDto {
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}