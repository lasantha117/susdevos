import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { userRolesTable, createUserRoleSchema } from '@/modules/user-roles/schema';

// Initialize the database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure you have this environment variable set
});
const db = drizzle(pool);

// Handler function to handle different HTTP methods
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      await addRole(req, res);
      break;
    case 'DELETE':
      await deleteRole(req, res);
      break;
    case 'GET':
      await getRoleById(req, res);
      break;
    case 'PUT':
      await updateRole(req, res);
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}

// Add Role
async function addRole(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validatedData = createUserRoleSchema.parse(req.body);
    await db.insert(userRolesTable).values(validatedData).execute(); // Execute the insert operation
    res.status(200).json({ message: 'Role added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding role', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}

// Delete Role
async function deleteRole(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Role ID is required' });
    }
    await db.delete(userRolesTable).where(id).execute(); // Correct usage of where clause
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting role', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}

// Get Role by ID
async function getRoleById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Role ID is required' });
      }
  
      // Fetch role by ID directly from the database
      const query = 'SELECT * FROM "userRole" WHERE "id" = $1';
      const result = await pool.query(query, [id]);
  
      if (result.rowCount === 1) {
        const role = result.rows[0];
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: 'Role not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching role', details: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
  

// Update Role
async function updateRole(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id, ...updatedData } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'Role ID is required' });
      }
      const validatedData = createUserRoleSchema.partial().parse(updatedData);
      await db.update(userRolesTable).set(validatedData).where(id).execute();
      //                                                         ^^^^^^
      // Ensure to specify '=' for equality comparison
      res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
      console.error('Update role error:', error);
      res.status(500).json({ error: 'Error updating role' });
    }
  }
// Get All Roles
async function getAllRoles(req: NextApiRequest, res: NextApiResponse) {
    try {
      const query = 'SELECT * FROM "userRole"';
      const result = await pool.query(query);
  
      const roles = result.rows;
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  