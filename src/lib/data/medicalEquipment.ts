export type MedicalEquipmentItem = {
  id: string;
  image: string;
};

export const medicalEquipmentData: MedicalEquipmentItem[] = [
  {
    id: 'power-chair',
    image: '/images/electric-wheelchairs/power-chair.jpeg',
  },
  {
    id: 'standard-rollator',
    image: '/images/rollators/standard-rollator.jpeg',
  },
  {
    id: 'knee-walker',
    image: '/images/knee-scooters/standard-knee-walker.jpeg',
  },
  {
    id: 'lift-chair',
    image: '/images/lift-chair/lift-chair.jpeg',
  },
  {
    id: 'mobility-scooter',
    image: '/images/mobility-scooters/standard-mobility-scooter.jpeg',
  },
  {
    id: 'bariatric-bed',
    image: '/images/electric-beds/bariatric-bed.jpeg',
  },
  {
    id: 'transport-chair',
    image: '/images/wheelchairs/wheelchair-w-brackes.jpg',
  },
  {
    id: 'purewick',
    image: '/images/purewick/purewick.jpeg',
  },
];
