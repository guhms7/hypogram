const pool = require("../database/pgslq");
const bcrypt = require("bcrypt");

class userModel {
  // Método para criar usuário
  static async criarUsuario(nome, email, senha, status) {
    const senhaHash = await bcrypt.hash(senha, 10); // Cria o hash da senha
    const query = `
      INSERT INTO public.usuario (usuarionome, usuarioemail, usuariosenha, usuariostatus)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const valores = [nome, email, senhaHash, status];
    const { rows } = await pool.query(query, valores);
    return rows[0]; // Retorna o usuário criado
  }

  // Método para buscar usuário por ID
  static async buscarUsuarioPorId(id) {
    const query = `SELECT * FROM public.usuario WHERE usuarioid = $1;`; // Ajuste o campo "usuarioid"
    const { rows } = await pool.query(query, [id]);
    return rows[0]; // Retorna o usuário encontrado pelo ID
  }

  // Método para buscar usuário por e-mail
  static async buscarUsuarioPorEmail(email) {
    const query = `SELECT * FROM public.usuario WHERE usuarioemail = $1;`; // Ajuste o campo "usuarioemail"
    const { rows } = await pool.query(query, [email]);

    if (rows.length > 0) {
      return rows[0]; // Retorna o primeiro usuário encontrado
    }

    return null; // Retorna null se nenhum usuário for encontrado
  }
}

module.exports = userModel;
