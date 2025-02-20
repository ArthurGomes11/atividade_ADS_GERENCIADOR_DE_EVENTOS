import db from "../data/database";
import { Evento } from "../models/EventoModel";
import { addLog, dataString }  from "../logs/logService";
import { eventoSchema } from "../validation/EventoValidation";

export function addEvento(evento: Omit<Evento, "id">) {

    const validationResult = eventoSchema.safeParse(evento);
    if (!validationResult.success) {
        console.error("Erro de validação:", validationResult.error.errors);
        return;
      }
    
    const query = `INSERT INTO eventos (even_nome, even_data, fk_usua_id) VALUES (?, ?, ?)`;
    db.run(query, [evento.usuario_id, evento.nome, evento.data] ,(erro) =>{
        if(erro){
            console.log(`BD ERRO EVENTOS ${erro}`)
        }else{
            
        }
    });
};

export function listarEvento() {
    const query = `SELECT * FROM eventos`;
    db.all(query, (erro, rows) =>{
        if(erro){
            console.log(`BD ERRO EVENTOS ${erro}`)
        }else{
            console.log(rows)
        }
    });
};

export function deletarEvento(id : number) {
    const query = `DELETE  FROM eventos WHERE pk_id_even = ? `;
    db.run(query, [id] , (erro) =>{
        if(erro){
            console.log(`BD ERRO EVENTOS ${erro}`)
        }else{
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
            console.log(`BD ERRO EVENTOS ${erro}`)
        }else if(this.changes === 0){
            console.log(`Evento não encontrado`)
        }else{
            addLog("EVENTO ALTERADO", id, dataString)
        }

    })
}