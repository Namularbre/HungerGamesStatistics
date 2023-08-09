const db = require('../utils/database');

class TributesModel {
    static async selectTributes() {
        let conn;
        let results;

        try {
            conn = await db.getConnection();
            results = await conn.query(`
                SELECT name, wins, kills, deaths
                FROM tributes t
                    INNER JOIN statistics s ON (t.idTribute = s.idTribute)
            `, []);
        } catch (error) {
            console.error(error.message);
            throw new Error('DB_ERROR');
        } finally {
            await conn.release();
        }

        return results;
    }

    static async selectTribute(name) {
        let conn;
        let result;

        try {
            conn = await db.getConnection();
            result = await conn.query(`
                SELECT name, wins, kills, deaths
                FROM tributes t 
                    INNER JOIN statistics s ON (t.idTribute = s.idTribute)
                WHERE name = ?;
            `, [name]);
        } catch (error) {
            console.error(error.message);
            throw new Error('DB_ERROR');
        } finally {
            await conn.release();
        }

        return result;
    }

    static async deleteTribute(name) {
        let conn;
        let rows;

        try {
            conn = await db.getConnection();
            rows = await conn.query(`
                DELETE FROM tributes WHERE name = ?;
            `, [name]);
        } catch (error) {
            console.error(error.message);
            throw new Error('DB_ERROR');
        } finally {
            await conn.release();
        }

        return rows;
    }

    static async insertTribute(name) {
        let conn;
        let rows;

        try {
            conn = await db.getConnection();
            rows = await conn.query(`
                INSERT INTO tribute (name) VALUES (?);
            `, [name]);
        } catch (error) {
            console.error(error.message);
            throw new Error('DB_ERROR');
        } finally {
            await conn.release();
        }

        return rows;
    }
}

module.exports = TributesModel;