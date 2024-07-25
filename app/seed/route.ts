import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { customers, users } from '../lib/data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      isActive BOOLEAN NOT NULL DEFAULT FALSE,
      balance VARCHAR(255) NOT NULL,
      age INTEGER NOT NULL,
      username VARCHAR(255) NOT NULL,
      gender VARCHAR(255) NOT NULL,
      organization VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      marital VARCHAR(255) NOT NULL,
      residence VARCHAR(255) NOT NULL,
      children VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      joined VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      index INTEGER NOT NULL,
      guarantors JSONB NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(async (customer) => {
      return client.sql`
        INSERT INTO customers (
          id, name, email, isActive, balance, age, username, gender, organization,
          phone, marital, residence, children, status, joined, address, index, guarantors
        )
        VALUES (
          ${customer.guid}, ${customer.name}, ${customer.email}, ${customer.isActive},
          ${customer.balance}, ${customer.age}, ${customer.username}, ${customer.gender},
          ${customer.organization}, ${customer.phone}, ${customer.marital}, ${customer.residence},
          ${customer.children}, ${customer.status}, ${customer.joined}, ${customer.address},
          ${customer.index}, ${JSON.stringify(customer.guarantor)}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedCustomers;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCustomers();
    await client.sql`COMMIT`;

    return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
