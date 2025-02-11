import db from "../data/database";
import { Usuario } from "../models/models";
import { Log } from "../models/models";
import { addLog, dataString}  from "../logs/logService";


export function addusuarios(nome: string, email: string, senha: string) {
    const query = `INSERT INTO usuario (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)`;

    db.run(query, [nome, email, senha], function (erro) {
        if (erro) {
            console.log(`Erro ao inserir dados: ${erro}`);
        } else {
            const usuarioId = this.lastID; 
            console.log(`Usuário adicionado com sucesso. ID: ${usuarioId}`);


            addLog("USUARIO INSERIDO", usuarioId, dataString);
        }
    });
}
export function listarTodos() {
    const query = `SELECT * FROM usuario`;
    db.all(query, (erro, rows) =>{
        if(erro){
            console.log(`Erro ao consultar dados${erro}`)
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
            console.log(`Erro ao deletar dados ${erro}`);
        }else{
            console.log("Usuario deletado com sucesso")
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
            console.log(`Não foi possivel atualizar o usuario ${erro}`)
        }else if(this.changes === 0){
            console.log(`Usuario não encontrado`)
        }else{
            console.log(`Usuario atualizado com sucesso`)
            addLog("USUARIO ALTERADO", id, dataString)
        }
    });
}


