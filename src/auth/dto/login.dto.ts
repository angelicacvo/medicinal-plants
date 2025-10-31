import { IsEmail, IsNotEmpty } from 'class-validator';

// DTO = Define QUÉ datos necesito para LOGIN
export class LoginDto {
  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;
}