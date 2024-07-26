import { sql } from '@vercel/postgres';
import { CustomerField } from './definitions';

console.log('All Environment Variables:', process.env);
console.log('POSTGRES_URL:', process.env.POSTGRES_URL);

 
export async function fetchCustomers(){
        try {
          const data = await sql<CustomerField>`
            SELECT
              id,
              name,
              email,
              isActive,
              balance,
              age,
              username,
              gender,
              organization,
              phone,
              marital,
              residence,
              children,
              status,
              joined,
              address,
              index,
              guarantors
            FROM customers
            ORDER BY name ASC
          `;
      
          const customers = data.rows;
          return customers;
        } catch (err) {
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
}