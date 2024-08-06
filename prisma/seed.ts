import { customers } from "../app/lib/data";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const insertedcustomers = customers.map((customer) => {
  return {
    id: customer._id,
    name: customer.name,
    email: customer.email,
    isActive: customer.isActive,
    balance: 20000,
    age: customer.age,
    username: customer.username,
    gender: customer.gender,
    organization: customer.organization,
    phone: customer.phone,
    marital: customer.marital,
    residence: customer.residence,
    children: customer.children,
    status: customer.status,
    joined: new Date(customer.joined),
    address: customer.address,
    index: customer.index,
  };
});

async function main() {
  console.log(`Start Seeding .....`);
  
  for (const customer of insertedcustomers) {
    const newCustomer = await prisma.customers.create({
      data: customer
    });
    console.log('data seeded');
  }
  console.log(`seeding finished`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
