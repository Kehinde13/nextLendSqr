export interface Guarantor {
  id: string;
  name: string;
  relationship: string;
  customerId: string;
}

export interface CustomerField {
  id: string; // UUID
  name: string;
  email: string;
  isActive: boolean;
  balance: number;
  age: number;
  username: string;
  gender: string;
  organization: string;
  phone: string;
  marital: string;
  residence: string;
  children: string;
  status: string;
  joined: Date;
  address: string;
  index: number;
  /* guarantors: Array<Guarantor>;  */
}

// Customer.ts
export interface Customer {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  balance: number;
  age: number;
  username: string;
  gender: string;
  organization: string;
  phone: string;
  marital: string;
  residence: string;
  children: string;
  status: string;
  joined: Date;
  address: string;
  index: number;
}
