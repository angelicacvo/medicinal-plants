import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// DTO = Define WHAT data I need for LOGIN
export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
    format: 'email'
  })
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'mySecurePassword123'
  })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}