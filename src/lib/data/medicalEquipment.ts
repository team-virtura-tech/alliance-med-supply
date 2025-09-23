import medicalEquipmentJson from './medicalEquipment.json';

export type MedicalEquipmentItem = {
  id: string;
  image: string;
};

export const medicalEquipmentData: MedicalEquipmentItem[] =
  medicalEquipmentJson;
