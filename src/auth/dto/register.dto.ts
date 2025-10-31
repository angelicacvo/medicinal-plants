import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// DTO = Define QUÉ datos necesito para REGISTRO
export class RegisterDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  fullName: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password: string;
}