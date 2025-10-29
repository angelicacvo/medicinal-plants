import { IsNotEmpty, IsString, MaxLength, IsOptional, MinLength, IsNumber, IsPositive } from 'class-validator';

export class CreatePlantDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser un texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'La especie es requerida' })
  @IsString({ message: 'La especie debe ser un texto'})
  @MinLength(2, { message: 'La especie debe tener al menos 2 caracteres' })
  @MaxLength(150, { message: 'La especie no puede exceder 150 caracteres' })
  species: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto'})
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  description?: string;

  @IsNotEmpty({ message: 'El ID del usuario es requerido' })
  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  @IsPositive({ message: 'El ID del usuario debe ser positivo' })
  userId: number;
}