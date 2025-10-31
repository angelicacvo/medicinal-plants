import { IsNotEmpty, IsString, MaxLength, IsOptional, MinLength, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlantDto {
  @ApiProperty({
    description: 'Plant common name',
    example: 'Chamomile',
    minLength: 2,
    maxLength: 100
  })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name: string;

  @ApiProperty({
    description: 'Plant scientific species name',
    example: 'Matricaria chamomilla',
    minLength: 2,
    maxLength: 150
  })
  @IsNotEmpty({ message: 'Species is required' })
  @IsString({ message: 'Species must be a string'})
  @MinLength(2, { message: 'Species must have at least 2 characters' })
  @MaxLength(150, { message: 'Species cannot exceed 150 characters' })
  species: string;

  @ApiPropertyOptional({
    description: 'Plant description and medicinal uses',
    example: 'Excellent for digestive problems, inflammation and as a natural relaxant. Prepared as an infusion with 1 tablespoon per cup of hot water.',
    maxLength: 500
  })
  @IsOptional()
  @IsString({ message: 'Description must be a string'})
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @ApiProperty({
    description: 'ID of the user who owns this plant',
    example: 1,
    minimum: 1
  })
  @IsNotEmpty({ message: 'User ID is required' })
  @IsNumber({}, { message: 'User ID must be a number' })
  @IsPositive({ message: 'User ID must be positive' })
  userId: number;
}