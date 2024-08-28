import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { DataTable } from '@/app/ui/dashboard/Data-table';
import { Customer } from '@/app/lib/definitions';

// Mock data
const mockCustomers: Customer[] = [
  {
      organization: 'Company A',
      username: 'userA',
      email: 'userA@example.com',
      phone: '1234567890',
      joined: new Date('2023-01-01'),
      status: 'Active',
      id: '1',
      name: '',
      isActive: false,
      balance: 0,
      age: 0,
      gender: '',
      marital: '',
      residence: '',
      children: '',
      address: '',
      index: 0
  },
  {
      organization: 'Company B',
      username: 'userB',
      email: 'userB@example.com',
      phone: '0987654321',
      joined: new Date('2023-02-01'),
      status: 'Inactive',
      id: '2',
      name: '',
      isActive: false,
      balance: 0,
      age: 0,
      gender: '',
      marital: '',
      residence: '',
      children: '',
      address: '',
      index: 0
  },
];

describe('DataTable Component', () => {
  test('renders the table with data', () => {
    render(<DataTable customers={mockCustomers} totalCustomers={mockCustomers.length} />);

    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('userA')).toBeInTheDocument();
    expect(screen.getByText('userA@example.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();

    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('userB')).toBeInTheDocument();
    expect(screen.getByText('userB@example.com')).toBeInTheDocument();
    expect(screen.getByText('0987654321')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });
  
});
