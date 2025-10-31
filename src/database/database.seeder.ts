import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Plant } from '../plants/entities/plant.entity';
import { BcryptUtil } from '../common/utils/bcrypt.util';

@Injectable()
export class DatabaseSeeder {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>,
  ) {}

  async seed() {
    console.log('Starting database seeding...');

    // Clear existing data first (respecting foreign key constraints)
    console.log('Clearing existing data...');
    await this.plantRepository.createQueryBuilder().delete().execute();
    await this.userRepository.createQueryBuilder().delete().execute();
    console.log('✅ Existing data cleared');

    // Create realistic users with encrypted passwords
    const users = await this.createUsers();
    console.log(`Created ${users.length} users with encrypted passwords`);

    // Create realistic medicinal plants
    const plants = await this.createPlants(users);
    console.log(`Created ${plants.length} medicinal plants`);

    console.log('Seeding completed successfully');
  }

  private async createUsers(): Promise<User[]> {
    const usersData = [
      {
        fullName: 'Dr. Elena Rodriguez',
        email: 'elena.rodriguez@example.com',
        password: 'password123',
      },
      {
        fullName: 'Prof. Michael Thompson',
        email: 'michael.thompson@example.com',
        password: 'password123',
      },
      {
        fullName: 'Dr. Sarah Chen',
        email: 'sarah.chen@example.com',
        password: 'password123',
      },
      {
        fullName: 'Dr. James Wilson',
        email: 'james.wilson@example.com',
        password: 'password123',
      },
      {
        fullName: 'Dr. Maria Garcia',
        email: 'maria.garcia@example.com',
        password: 'password123',
      },
      {
        fullName: 'Dr. Robert Taylor',
        email: 'robert.taylor@example.com',
        password: 'password123',
      },
    ];

    const users: User[] = [];
    for (const userData of usersData) {
      // Hash the password before saving
      const hashedPassword = await BcryptUtil.hashPassword(userData.password);
      
      const user = this.userRepository.create({
        ...userData,
        password: hashedPassword,
      });
      
      const savedUser = await this.userRepository.save(user);
      users.push(savedUser);
    }

    return users;
  }

  private async createPlants(users: User[]): Promise<Plant[]> {
    const plantsData = [
      // Dr. Elena Rodriguez's plants (digestive system specialist)
      {
        name: 'Chamomile',
        species: 'Matricaria chamomilla',
        description: 'Excellent for digestive problems, inflammation, and as a natural relaxant. Prepare as an infusion with 1 tablespoon per cup of hot water.',
        userId: users[0].id,
      },
      {
        name: 'Peppermint',
        species: 'Mentha piperita',
        description: 'Ideal for stomach discomfort, gas, and nausea. Fresh leaves can be chewed or prepared as tea for digestive relief.',
        userId: users[0].id,
      },
      {
        name: 'Ginger',
        species: 'Zingiber officinale',
        description: 'Powerful anti-inflammatory and digestive aid. Fresh root is excellent for teas that soothe stomach upset and nausea.',
        userId: users[0].id,
      },

      // Prof. Michael Thompson's plants (respiratory system expert)
      {
        name: 'Eucalyptus',
        species: 'Eucalyptus globulus',
        description: 'Powerful expectorant and decongestant. Its leaves are used in steam inhalations for respiratory problems.',
        userId: users[1].id,
      },
      {
        name: 'Thyme',
        species: 'Thymus vulgaris',
        description: 'Antimicrobial and expectorant, excellent for coughs, bronchitis, and respiratory infections.',
        userId: users[1].id,
      },
      {
        name: 'Sage',
        species: 'Salvia officinalis',
        description: 'Anti-inflammatory and antimicrobial, perfect for sore throat, coughs, and respiratory inflammation.',
        userId: users[1].id,
      },

      // Dr. Sarah Chen's plants (skin care specialist)
      {
        name: 'Aloe Vera',
        species: 'Aloe barbadensis',
        description: 'Healing and skin regenerating. Its internal gel is perfect for burns, wounds, and dry skin treatment.',
        userId: users[2].id,
      },
      {
        name: 'Calendula',
        species: 'Calendula officinalis',
        description: 'Anti-inflammatory and healing. Its flowers are used in creams and ointments for skin problems.',
        userId: users[2].id,
      },
      {
        name: 'Tea Tree',
        species: 'Melaleuca alternifolia',
        description: 'Powerful antimicrobial and antiseptic. Essential oil is excellent for acne, fungal infections, and skin conditions.',
        userId: users[2].id,
      },

      // Dr. James Wilson's plants (pain relief expert)
      {
        name: 'Arnica',
        species: 'Arnica montana',
        description: 'Potent anti-inflammatory for bruises, bumps, and muscle pain. Used externally in creams and ointments.',
        userId: users[3].id,
      },
      {
        name: 'Willow Bark',
        species: 'Salix alba',
        description: 'Natural analgesic containing salicin (aspirin precursor). Effective for headaches and joint pain relief.',
        userId: users[3].id,
      },
      {
        name: 'Turmeric',
        species: 'Curcuma longa',
        description: 'Powerful anti-inflammatory and antioxidant. Ground root is excellent for joint pain and inflammation.',
        userId: users[3].id,
      },

      // Dr. Maria Garcia's plants (nervous system specialist)
      {
        name: 'Valerian',
        species: 'Valeriana officinalis',
        description: 'Natural sedative very effective for insomnia and anxiety. Its root is prepared as a nighttime infusion.',
        userId: users[4].id,
      },
      {
        name: 'Lavender',
        species: 'Lavandula angustifolia',
        description: 'Relaxing and aromatic, ideal for reducing stress and promoting restful sleep.',
        userId: users[4].id,
      },
      {
        name: 'Lemon Balm',
        species: 'Melissa officinalis',
        description: 'Known for its calming and digestive properties. Very effective for anxiety and sleep problems.',
        userId: users[4].id,
      },

      // Dr. Robert Taylor's plants (immune system expert)
      {
        name: 'Echinacea',
        species: 'Echinacea purpurea',
        description: 'Strengthens the immune system and speeds recovery from colds. Taken as tincture or tea.',
        userId: users[5].id,
      },
      {
        name: 'Elderberry',
        species: 'Sambucus canadensis',
        description: 'Rich in antioxidants and immune-boosting compounds. Berries are excellent for cold and flu prevention.',
        userId: users[5].id,
      },
      {
        name: 'Astragalus',
        species: 'Astragalus membranaceus',
        description: 'Adaptogen that increases energy and stress resistance. Root is highly valued in traditional medicine for immune support.',
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