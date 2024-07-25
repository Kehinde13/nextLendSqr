// CustomerField.ts
export interface CustomerField {
    id: string; // UUID
    name: string;
    email: string;
    isActive: boolean;
    balance: string;
    age: number;
    username: string;
    gender: string;
    organization: string;
    phone: string;
    marital: string;
    residence: string;
    children: string;
    status: string;
    joined: string;
    address: string;
    index: number;
    guarantors: object; // You can define a more specific type if you know the structure of the guarantors
  }
  