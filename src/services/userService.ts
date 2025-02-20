import db from "../data/database";
import { Usuario } from "../models/UsuarioModel"
import { addLog, dataString}  from "../logs/logService";
import { usuarioSchema } from "../validation/UsuarioValidation";

export function addusuarios(usuario: Omit<Usuario, "id">
    ,callback: (usuarioId: number | null, erro?: Error) => void
) {
    
    const validationResult = usuarioSchema.safeParse(usuario);

    const query = `INSERT INTO usuario (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)`;

    db.run(query, [usuario.nome, usuario.email, usuario.senha], function (erro) {
        if (erro) {
            console.log(`BD ERRO USUÁRIO ${erro}`);
        } else {
            const usuarioId = this.lastID; 
            callback(usuarioId);
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
export function deletarUsuario(id : number){
    const query = `DELETE FROM usuario WHERE pk_usua_id = ?`
    db.run(query, (erro) =>{
        if(erro){
            console.log(`BD ERRO USUÁRIO  ${erro}`);
        }else{
            
            addLog("USUARIO DELETADO COM SUCESSO", id, dataString);
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


