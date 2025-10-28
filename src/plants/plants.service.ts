import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  private plants:Plant[] = [];
  private globalID:number = 1;

  create(createPlantDto: CreatePlantDto):Plant {
    const newPlant = {id: this.globalID, ...createPlantDto};
    this.plants.push(newPlant);
    this.globalID +=1;
    return newPlant;  
  }

  findAll():Plant[] {
    return this.plants;
  }

  findOne(id: number):Plant|undefined {
    const plant = this.plants.find((p) => p.id === id);
    if (!plant) {
      throw new NotFoundException(`Plant with ID ${id} not found`);
    }
    return plant;
  }

  update(id: number, updatePlantDto: UpdatePlantDto):Plant|undefined {
    const index = this.plants.findIndex((p) => p.id === id);
    if ( index === -1 ) throw new NotFoundException(`Plant with ID ${id} not found`);
    this.plants[index] = { ...this.plants[index], ...updatePlantDto };
    return this.plants[index];
  }

  remove(id: number):Plant|undefined {
    const index = this.plants.findIndex((p) => p.id === id);
    if ( index === -1 ) throw new NotFoundException(`Plant with ID ${id} not found`);
    const [deleted] = this.plants.splice(index, 1);
    return deleted;
  }
}
