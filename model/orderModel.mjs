import { pool } from "../db/postgresConnection.mjs";


const orderModel = {

    getOrders: async () => {
    
    try {
        const result = await pool.query(`
        SELECT orders.*
        FROM orders
        `)
            return result.rows
    } catch (error) {
        throw error;
    }
    },
    
    createOrder: async () => {
        const client = pool.connect()
        try {
            const { customer_id, items, orderTime, status } = orderData;
    
            const orderResult = (await client).query('SELECT id FROM')  
        } catch (error) {
            
        }
    }
    
    
    
    
    }
    
    export default orderModel;