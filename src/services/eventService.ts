import db from "../data/database";
import { Evento } from "../models/models";
import { addLog, dataString }  from "../logs/logService";


export function addevento(nome: string, data: string, id_usuario: number) {
    const query = `INSERT INTO eventos (even_nome, even_data, fk_usua_id) VALUES (?, ?, ?)`;
    db.run(query, [id_usuario, nome, data] ,(erro) =>{
        if(erro){
            console.log(`Erro ao iserir dados ${erro}`)
        }else{
            console.log("Evento adicionado com sucesso")
            addLog("EVENTO INSERIDO", id_usuario, dataString)
        }
    });
};

export function listarEvento() {
    const query = `SELECT * FROM eventos`;
    db.all(query, (erro, rows) =>{
        if(erro){
            console.log(`Erro ao consultar eventos ${erro}`)
        }else{
            console.log("Evento consultado com sucesso")
            console.log(rows)
        }
    });
};

export function deletarEvento(id : number) {
    const query = `DELETE  FROM eventos WHERE pk_id_even = ? `;
    db.run(query, [id] , (erro) =>{
        if(erro){
            console.log(`Erro ao consultar eventos${erro}`)
        }else{
            console.log("Evento consultado com sucesso")
            addLog("EVENTO DELETADO", id, dataString)
        }
    });
};

export function alterarEvento(id: number, nome : string, data: string){
    const query = `UPDATE eventos SET usua_nome = ?,
    even_data  = ?
    WHERE pk_even_id = ?`;
    db.run(query, [nome, data, id], function(erro){
        if(erro){
            console.log(`Não foi possivel atualizar o evento ${erro}`)
        }else if(this.changes === 0){
            console.log(`Evento não encontrado`)
        }else{
            console.log(`Evento atualizado com sucesso`)
            addLog("EVENTO ALTERADO", id, dataString)
        }

    })
}