import { IsNotEmpty, IsString, MaxLength, IsOptional, MinLength, IsNumber, IsPositive } from 'class-validator';

export class CreatePlantDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name: string;

  @IsNotEmpty({ message: 'Species is required' })
  @IsString({ message: 'Species must be a string'})
  @MinLength(2, { message: 'Species must have at least 2 characters' })
  @MaxLength(150, { message: 'Species cannot exceed 150 characters' })
  species: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string'})
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @IsNotEmpty({ message: 'User ID is required' })
  @IsNumber({}, { message: 'User ID must be a number' })
  @IsPositive({ message: 'User ID must be positive' })
  userId: number;
}