import { FoodCategory } from './food-listing.model';

export type DemandStatus = 'open' | 'fulfilled' | 'cancelled';

export interface FoodDemand {
  id: number;
  requesterId: number;           // The receiver org (aşevi, barınak vb) ID
  requesterName: string;         // Name of the organization
  category: FoodCategory;        // What type of food they need
  title: string;                 // Short summary of the demand
  description: string;           // Detailed description
  requiredQuantity: string;      // How many/much needed (e.g., "50 porsiyon")
  neededBy: string;              // Date string when they need it by
  status: DemandStatus;
  createdAt: string;
  fulfilledById?: number;        // The donor ID who fulfilled it
  fulfilledByName?: string;      // The donor name who fulfilled it
}
