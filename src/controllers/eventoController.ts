import { addEvento } from "../services/eventService";
import { addLog,dataString } from "../logs/logService";

export async function addEventoController(nome: string, data: string, usuario_id: number) {
    try{
        await addEvento({nome, data, usuario_id});
        addLog("EVENTO INSERIDO", usuario_id, dataString);
        console.log("Evento inserido com sucesso.")
    } catch(error) {
        console.log("Erro ao inserir evento");
    }
    
}