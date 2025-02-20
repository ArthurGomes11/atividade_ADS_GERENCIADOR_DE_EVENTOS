import { addusuarios } from "../services/userService";
import { addLog, dataString } from "../logs/logService";

export async function addUsuarioController(nome : string, email : string, senha: string) {
    addusuarios({ nome, email, senha }, (usuarioId, erro) => {
        if (erro) {
          console.error("Erro ao inserir usuário:", erro.message);
        } else if (usuarioId !== null) {
          addLog("USUARIO INSERIDO", usuarioId, dataString);
          console.log("Usuário inserido com sucesso.");
        }
      });
    }
    