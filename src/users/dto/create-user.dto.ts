import { IsNotEmpty, IsString, MaxLength, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    minLength: 2,
    maxLength: 100
  })
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  @MinLength(2, { message: 'Full name must have at least 2 characters' })
  @MaxLength(100, { message: 'Full name cannot exceed 100 characters' })
  fullName: string;

  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
    format: 'email',
    maxLength: 255
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Must be a valid email' })
  @MaxLength(255, { message: 'Email cannot exceed 255 characters' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'mySecurePassword123',
    minLength: 6,
    maxLength: 50
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @MaxLength(50, { message: 'Password cannot exceed 50 characters' })
  password: string;
}
