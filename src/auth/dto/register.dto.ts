import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// DTO = Define WHAT data I need for REGISTRATION
export class RegisterDto {
  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    minLength: 1
  })
  @IsNotEmpty({ message: 'Full name is required' })
  fullName: string;

  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
    format: 'email'
  })
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'mySecurePassword123',
    minLength: 6
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  password: string;
}