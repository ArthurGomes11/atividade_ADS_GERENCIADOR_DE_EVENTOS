import { addusuarios } from "../services/userService";
import { addLog, dataString } from "../logs/logService";
import { usuarioSchema } from "../validation/UsuarioValidation";

export async function addUsuarioController(nome: string, email: string, senha: string) {
    const validationResult = usuarioSchema.safeParse({ nome, email, senha });

    if (!validationResult.success) {
        console.error("Erro de validação:", validationResult.error.errors);
        return;
    }

    addusuarios({ nome, email, senha }, (usuarioId, erro) => {
        if (erro) {
            console.error("Erro ao inserir usuário:", erro.message);
        } else if (usuarioId !== null) {
            addLog("USUARIO INSERIDO", usuarioId, dataString);
           
        }
    });
}
