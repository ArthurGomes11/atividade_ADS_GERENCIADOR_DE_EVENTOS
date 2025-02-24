import db from "../data/database";
import { Usuario } from "../models/UsuarioModel"
import { addLog, dataString}  from "../logs/logService";
import { usuarioSchema } from "../validation/UsuarioValidation";

export function addusuarios(
    usuario: Omit<Usuario, "id">,
    callback: (usuarioId: number | null, erro?: Error) => void
) {
    const validationResult = usuarioSchema.safeParse(usuario);
    if (!validationResult.success) {
        callback(null, new Error("Dados inválidos"));
        return;
    }

    const query = `INSERT INTO usuario (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)`;

    db.run(query, [usuario.nome, usuario.email, usuario.senha], function (erro) {
        if (erro) {
            console.log(`BD ERRO USUÁRIO ${erro}`);
            callback(null, erro);
        } else {
            if (this.lastID) {
                callback(this.lastID);
                addLog("USUÁRIO INSERIDO COM SUCESSO", this.lastID, dataString); // Log sendo adicionado
            } else {
                callback(null, new Error("Erro ao obter ID do usuário"));
            }
        }
    });
}


export function listarTodos() {
    const query = `SELECT * FROM usuario`;
    db.all(query, (erro, rows) =>{
        if(erro){
            console.log(`BD ERRO USUÁRIO ${erro}`)
        }else{
            console.log("Listado com sucesso")
            console.log(rows)
        }
    });
};
export function deletarUsuario(id: number) {
    const query = `DELETE FROM usuario WHERE pk_usua_id = ?`;
    console.log(`Executando DELETE para o ID: ${id}`);
    db.run(query, [id], function(erro) {
      if (erro) {
        console.log(`Erro ao deletar usuário: ${erro.message}`);
      } else {
        console.log(`Usuário com ID ${id} deletado com sucesso!`);
        addLog("USUÁRIO DELETADO COM SUCESSO", id, dataString);
      }
    });
  }
  
export function alterarUsuario(id: number, nome: string, email: string, senha: string){
     const query = `UPDATE usuario SET usua_nome = ?,
                                       usua_email = ?,
                                       usua_senha = ?
                                       WHERE pk_usua_id = ?`
    db.run(query, [nome, email, senha, id], function(erro){
        if(erro){
            console.log(`BD ERRO USUÁRIO  ${erro}`)
        }else if(this.changes === 0){
            console.log(`Usuario não encontrado`)
        }else{
            addLog("USUARIO ALTERADO", id, dataString)
        }
    });
}


