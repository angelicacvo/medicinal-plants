import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantsRepository: Repository<Plant>,
  ) { }

  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    const existingPlant = await this.plantsRepository.findOne({
      where: { name: createPlantDto.name, species: createPlantDto.species }
    });

    if (existingPlant) {
      throw new BadRequestException('La planta ya existe');
    }

    const plant = this.plantsRepository.create(createPlantDto);
    return await this.plantsRepository.save(plant);
  }

  async findAll(): Promise<Plant[]> {
    return await this.plantsRepository.find();
  }

  async findOne(id: number): Promise<Plant> {
    const plant = await this.plantsRepository.findOne({ where: { id } });
    if (!plant) {
      throw new NotFoundException(`Planta con ID ${id} no encontrada`);
    }
    return plant;
  }

  async update(id: number, updatePlantDto: UpdatePlantDto): Promise<Plant> {
    const plant = await this.plantsRepository.findOne({ where: { id } });

    if (!plant) {
      throw new NotFoundException(`Planta número ${id} no encontrada`);
    }

    const existingPlant = await this.plantsRepository.findOne({
      where: { name: updatePlantDto.name, species: updatePlantDto.species },
    });

    if (existingPlant && existingPlant.id !== id) {
      throw new ConflictException('La planta ya existe');
    }

    Object.assign(plant, updatePlantDto);
    return this.plantsRepository.save(plant);

  }

  async remove(id: number): Promise<{ message: string }> {
    const plant = await this.plantsRepository.findOne({ where: { id } });

    if (!plant) {
      throw new NotFoundException(`Planta número ${id} no encontrada`);
    }

    await this.plantsRepository.remove(plant);
    return { message: `Planta número ${id} eliminada correctamente` };
  }

}
