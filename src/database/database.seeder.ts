import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Plant } from '../plants/entities/plant.entity';

@Injectable()
export class DatabaseSeeder {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>,
  ) {}

  async seed() {
    console.log('Iniciando seeding de la base de datos...');

    // Verificar si ya hay datos
    const userCount = await this.userRepository.count();
    if (userCount > 0) {
      console.log('La base de datos ya contiene datos. Saltando seeding.');
      return;
    }

    // Crear usuarios realistas
    const users = await this.createUsers();
    console.log(`Creados ${users.length} usuarios`);

    // Crear plantas medicinales realistas
    const plants = await this.createPlants(users);
    console.log(`Creadas ${plants.length} plantas medicinales`);

    console.log('Seeding completado exitosamente');
  }

  private async createUsers(): Promise<User[]> {
    const usersData = [
      {
        fullName: 'María Elena Herrera',
        email: 'maria.herrera@gmail.com',
        password: 'password123', // En producción esto debería estar hasheado
      },
      {
        fullName: 'Carlos Andrés Medina',
        email: 'carlos.medina@hotmail.com',
        password: 'password123',
      },
      {
        fullName: 'Ana Sofía Castillo',
        email: 'ana.castillo@yahoo.com',
        password: 'password123',
      },
      {
        fullName: 'Roberto Jiménez López',
        email: 'roberto.jimenez@gmail.com',
        password: 'password123',
      },
      {
        fullName: 'Lucía Fernanda Torres',
        email: 'lucia.torres@outlook.com',
        password: 'password123',
      },
      {
        fullName: 'Miguel Ángel Vargas',
        email: 'miguel.vargas@gmail.com',
        password: 'password123',
      },
    ];

    const users: User[] = [];
    for (const userData of usersData) {
      const user = this.userRepository.create(userData);
      const savedUser = await this.userRepository.save(user);
      users.push(savedUser);
    }

    return users;
  }

  private async createPlants(users: User[]): Promise<Plant[]> {
    const plantsData = [
      // Plantas de María Elena (especialista en plantas digestivas)
      {
        name: 'Manzanilla',
        species: 'Matricaria chamomilla',
        description: 'Excelente para problemas digestivos, inflamación y como relajante natural. Se prepara en infusión con 1 cucharada por taza de agua caliente.',
        userId: users[0].id,
      },
      {
        name: 'Hierba Buena',
        species: 'Mentha spicata',
        description: 'Ideal para malestares estomacales, gases y náuseas. Sus hojas frescas se pueden masticar o preparar en té.',
        userId: users[0].id,
      },
      {
        name: 'Toronjil',
        species: 'Melissa officinalis',
        description: 'Conocido por sus propiedades calmantes y digestivas. Muy efectivo para la ansiedad y problemas del sueño.',
        userId: users[0].id,
      },

      // Plantas de Carlos (enfocado en plantas respiratorias)
      {
        name: 'Eucalipto',
        species: 'Eucalyptus globulus',
        description: 'Poderoso expectorante y descongestionante. Sus hojas se usan en vaporizaciones para problemas respiratorios.',
        userId: users[1].id,
      },
      {
        name: 'Malva',
        species: 'Malva sylvestris',
        description: 'Antiinflamatoria y emoliente, excelente para irritaciones de garganta y problemas respiratorios leves.',
        userId: users[1].id,
      },
      {
        name: 'Jengibre',
        species: 'Zingiber officinale',
        description: 'Potente antiinflamatorio y expectorante. Su raíz fresca es ideal para tés que alivian la congestión.',
        userId: users[1].id,
      },

      // Plantas de Ana Sofía (especialista en plantas para la piel)
      {
        name: 'Sábila',
        species: 'Aloe vera',
        description: 'Cicatrizante y regeneradora de la piel. Su gel interno es perfecto para quemaduras, heridas y piel seca.',
        userId: users[2].id,
      },
      {
        name: 'Caléndula',
        species: 'Calendula officinalis',
        description: 'Antiinflamatoria y cicatrizante. Sus flores se usan en cremas y ungüentos para problemas de la piel.',
        userId: users[2].id,
      },
      {
        name: 'Romero',
        species: 'Rosmarinus officinalis',
        description: 'Estimulante de la circulación y antioxidante. Excelente para el cabello y como tónico facial.',
        userId: users[2].id,
      },

      // Plantas de Roberto (plantas para dolores y inflamación)
      {
        name: 'Árnica',
        species: 'Arnica montana',
        description: 'Antiinflamatoria potente para golpes, moretones y dolores musculares. Se usa externamente en cremas.',
        userId: users[3].id,
      },
      {
        name: 'Sauce Blanco',
        species: 'Salix alba',
        description: 'Analgésico natural, contiene salicina (precursor de la aspirina). Efectivo para dolores de cabeza y articulares.',
        userId: users[3].id,
      },
      {
        name: 'Cúrcuma',
        species: 'Curcuma longa',
        description: 'Poderoso antiinflamatorio y antioxidante. Su raíz molida es excelente para dolores articulares.',
        userId: users[3].id,
      },

      // Plantas de Lucía (plantas para el sistema nervioso)
      {
        name: 'Valeriana',
        species: 'Valeriana officinalis',
        description: 'Sedante natural muy efectivo para el insomnio y la ansiedad. Su raíz se prepara en infusión nocturna.',
        userId: users[4].id,
      },
      {
        name: 'Lavanda',
        species: 'Lavandula angustifolia',
        description: 'Relajante y aromática, ideal para reducir el estrés y promover el sueño reparador.',
        userId: users[4].id,
      },
      {
        name: 'Pasiflora',
        species: 'Passiflora incarnata',
        description: 'Excelente ansiolítico natural. Sus hojas y flores ayudan a calmar los nervios y mejorar el sueño.',
        userId: users[4].id,
      },

      // Plantas de Miguel (plantas inmunológicas y energizantes)
      {
        name: 'Equinácea',
        species: 'Echinacea purpurea',
        description: 'Fortalece el sistema inmunológico y acelera la recuperación de resfriados. Se toma en tintura o té.',
        userId: users[5].id,
      },
      {
        name: 'Ginseng',
        species: 'Panax ginseng',
        description: 'Adaptógeno que aumenta la energía y resistencia al estrés. Su raíz es muy valorada en medicina tradicional.',
        userId: users[5].id,
      },
      {
        name: 'Moringa',
        species: 'Moringa oleifera',
        description: 'Súper alimento rico en vitaminas y minerales. Sus hojas son excelentes para fortalecer el organismo.',
        userId: users[5].id,
      },
    ];

    const plants: Plant[] = [];
    for (const plantData of plantsData) {
      const plant = this.plantRepository.create(plantData);
      const savedPlant = await this.plantRepository.save(plant);
      plants.push(savedPlant);
    }

    return plants;
  }
}