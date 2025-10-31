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
      throw new BadRequestException('Plant already exists');
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
      throw new NotFoundException(`Plant with ID ${id} not found`);
    }
    return plant;
  }

  async update(id: number, updatePlantDto: UpdatePlantDto): Promise<Plant> {
    const plant = await this.plantsRepository.findOne({ where: { id } });

    if (!plant) {
      throw new NotFoundException(`Plant number ${id} not found`);
    }

    const existingPlant = await this.plantsRepository.findOne({
      where: { name: updatePlantDto.name, species: updatePlantDto.species },
    });

    if (existingPlant && existingPlant.id !== id) {
      throw new ConflictException('Plant already exists');
    }

    Object.assign(plant, updatePlantDto);
    return this.plantsRepository.save(plant);

  }

  async remove(id: number): Promise<{ message: string }> {
    const plant = await this.plantsRepository.findOne({ where: { id } });

    if (!plant) {
      throw new NotFoundException(`Plant number ${id} not found`);
    }

    await this.plantsRepository.remove(plant);
    return { message: `Plant number ${id} deleted successfully` };
  }

}
