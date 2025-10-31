import { IsOptional, IsString, MaxLength, MinLength, IsNumber, IsPositive } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePlantDto {
  @ApiPropertyOptional({
    description: 'Plant common name',
    example: 'Chamomile',
    minLength: 2,
    maxLength: 100
  })
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name?: string;

  @ApiPropertyOptional({
    description: 'Plant scientific species name',
    example: 'Matricaria chamomilla',
    minLength: 2,
    maxLength: 150
  })
  @IsOptional()
  @IsString({ message: 'Species must be a string'})
  @MinLength(2, { message: 'Species must have at least 2 characters' })
  @MaxLength(150, { message: 'Species cannot exceed 150 characters' })
  species?: string;

  @ApiPropertyOptional({
    description: 'Plant description and medicinal uses',
    example: 'Excellent for digestive problems, inflammation and as a natural relaxant.',
    maxLength: 500
  })
  @IsOptional()
  @IsString({ message: 'Description must be a string'})
  @MaxLength(500, { message: 'Description cannot exceed 500 characters' })
  description?: string;

  @ApiPropertyOptional({
    description: 'ID of the user who owns this plant',
    example: 1,
    minimum: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'User ID must be a number' })
  @IsPositive({ message: 'User ID must be positive' })
  userId?: number;
}
