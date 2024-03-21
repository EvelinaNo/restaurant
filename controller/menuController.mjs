import pg from 'pg';

// Prijungimas PostgreSQL duomenų bazės
const pool = new pg.Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // PostgreSQL portas
});

// Viso meniu gavimas
const getMenus = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM menu');
    const menus = result.rows;
    client.release();
    res.status(200).json(menus);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'An error occurred while retrieving menus' });
  }
};

// Vieno meniu elemento gavimas pagal jo ID
const getMenuById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM menu WHERE id = $1', [id]);
    const menu = result.rows[0];
    client.release();
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: 'Menu not found' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'An error occurred while retrieving menu' });
  }
};

// Naujo meniu elemento sukūrimas
const createMenu = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO menu (name, description, price, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, category]
    );
    const newMenu = result.rows[0];
    client.release();
    res.status(201).json(newMenu);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'An error occurred while creating menu' });
  }
};

// Meniu elemento duomenų atnaujinimas
const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE menu SET name = $1, description = $2, price = $3, category = $4 WHERE id = $5 RETURNING *',
      [name, description, price, category, id]
    );
    const updatedMenu = result.rows[0];
    client.release();
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'An error occurred while updating menu' });
  }
};

// Meniu elemento pašalinimas
const deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM menu WHERE id = $1', [id]);
    client.release();
    res.status(204).end();
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'An error occurred while deleting menu' });
  }
};

export default {
  getMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
