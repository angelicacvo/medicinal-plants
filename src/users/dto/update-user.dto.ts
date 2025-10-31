import { IsOptional, IsString, MaxLength, IsEmail, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiPropertyOptional({
      description: 'User full name',
      example: 'John Doe',
      minLength: 2,
      maxLength: 100
    })
    @IsOptional()
    @IsString({ message: 'Full name must be a string' })
    @MinLength(2, { message: 'Full name must have at least 2 characters' })
    @MaxLength(100, { message: 'Full name cannot exceed 100 characters' })
    fullName?: string;

    @ApiPropertyOptional({
      description: 'User email address',
      example: 'john.doe@example.com',
      format: 'email',
      maxLength: 255
    })
    @IsOptional()
    @IsEmail({}, { message: 'Must be a valid email' })
    @MaxLength(255, { message: 'Email cannot exceed 255 characters' })
    email?: string;

    @ApiPropertyOptional({
      description: 'User password',
      example: 'myNewSecurePassword123',
      minLength: 6,
      maxLength: 50
    })
    @IsOptional()
    @IsString({ message: 'Password must be a string' })
    @MinLength(6, { message: 'Password must have at least 6 characters' })
    @MaxLength(50, { message: 'Password cannot exceed 50 characters' })
    password?: string;
}
