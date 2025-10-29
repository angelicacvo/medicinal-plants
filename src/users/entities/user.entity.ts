import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Plant } from '../../plants/entities/plant.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Relación One-to-Many: Un usuario puede tener muchas plantas
  @OneToMany(() => Plant, (plant) => plant.user)
  plants: Plant[];
}


