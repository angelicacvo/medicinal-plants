import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from './plant.entity';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantsRepository: Repository<Plant>
  ) {}

  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    const plant = this.plantsRepository.create({
      ...createPlantDto,
      quantity: createPlantDto.quantity ?? 0
    });
    return this.plantsRepository.save(plant);
  }

  async findAll(): Promise<Plant[]> {
    return this.plantsRepository.find();
  }

  async findOne(id: string): Promise<Plant> {
    const plant = await this.plantsRepository.findOne({ where: { id } });
    if (!plant) {
      throw new NotFoundException('Plant not found');
    }
    return plant;
  }

  async update(id: string, updatePlantDto: UpdatePlantDto): Promise<Plant> {
    const plant = await this.findOne(id);
    const updated = this.plantsRepository.merge(plant, updatePlantDto);
    return this.plantsRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const plant = await this.findOne(id);
    await this.plantsRepository.remove(plant);
  }
}
