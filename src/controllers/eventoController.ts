import { addEvento } from "../services/eventService";
import { addLog, dataString } from "../logs/logService";
import { eventoSchema } from "../validation/EventoValidation";

export async function addEventoController(nome: string, data: string, usuario_id: number) {
    const validationResult = eventoSchema.safeParse({ nome, data, usuario_id });

    if (!validationResult.success) {
        console.error("Erro de validação:", validationResult.error.errors);
        return;
    }

    try {
        await addEvento({ nome, data, usuario_id });
        addLog("EVENTO INSERIDO", usuario_id, dataString);
        console.log("Evento inserido com sucesso.");
    } catch (error) {
        console.log("Erro ao inserir evento:", error);
    }
}
