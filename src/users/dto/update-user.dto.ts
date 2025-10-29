import { IsOptional, IsString, MaxLength, IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString({ message: 'El nombre debe ser un texto' })
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
    fullName?: string;

    @IsOptional()
    @IsEmail({}, { message: 'Debe ser un email válido' })
    @MaxLength(255, { message: 'El email no puede exceder 255 caracteres' })
    email?: string;

    @IsOptional()
    @IsString({ message: 'La contraseña debe ser un texto' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @MaxLength(50, { message: 'La contraseña no puede exceder 50 caracteres' })
    password?: string;
}
