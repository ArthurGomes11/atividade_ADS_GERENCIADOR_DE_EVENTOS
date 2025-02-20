"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const eventoController_1 = require("../controllers/eventoController");
const usuarioController_1 = require("../controllers/usuarioController");
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const { option } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "option",
                message: "Escolha uma opção:",
                choices: ["Adicionar Usuário", "Adicionar Evento", "Sair"],
            },
        ]);
        switch (option) {
            case "Adicionar Usuário":
                yield adicionarUsuario();
                break;
            case "Adicionar Evento":
                yield adicionarEvento();
                break;
            case "Sair":
                console.log("Saindo...");
                process.exit(0);
        }
        // Retorna ao menu principal após a ação
        yield mainMenu();
    });
}
function adicionarUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const respostas = yield inquirer_1.default.prompt([
            { type: "input", name: "nome", message: "Nome do usuário:" },
            { type: "input", name: "email", message: "E-mail do usuário:" },
            { type: "input", name: "senha", message: "Senha do usuário:" },
        ]);
        try {
            yield (0, usuarioController_1.addUsuarioController)(respostas.nome, respostas.email, respostas.senha);
            console.log("Usuário inserido com sucesso!");
        }
        catch (error) {
            console.log(`Erro ao inserir usuário ${error}`);
        }
    });
}
function adicionarEvento() {
    return __awaiter(this, void 0, void 0, function* () {
        const respostas = yield inquirer_1.default.prompt([
            { type: "input", name: "nome", message: "Nome do evento:" },
            { type: "input", name: "data", message: "Data do evento (YYYY-MM-DD):" },
            { type: "input", name: "usuario_id", message: "ID do usuário associado ao evento:" },
        ]);
        try {
            yield (0, eventoController_1.addEventoController)(respostas.nome, respostas.data, Number(respostas.usuario_id));
            console.log("Evento inserido com sucesso!");
        }
        catch (error) {
            console.error(`Erro ao inserir evento ${error}`);
        }
    });
}
// Inicia o menu principal
mainMenu();
