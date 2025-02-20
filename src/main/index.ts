import { addusuarios, listarTodos, deletarUsuario, alterarUsuario} from "../services/userService";
import { addEvento, listarEvento, deletarEvento, alterarEvento } from "../services/eventService";


import inquirer from "inquirer";
import { addEventoController } from "../controllers/eventoController";
import { addUsuarioController } from "../controllers/usuarioController";

async function mainMenu() {
  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Escolha uma opção:",
      choices: ["Adicionar Usuário", "Adicionar Evento", "Sair"],
    },
  ]);

  switch (option) {
    case "Adicionar Usuário":
      await adicionarUsuario();
      break;
    case "Adicionar Evento":
      await adicionarEvento();
      break;
    case "Sair":
      console.log("Saindo...");
      process.exit(0);
  }

  // Retorna ao menu principal após a ação
  await mainMenu();
}

async function adicionarUsuario() {
  const respostas = await inquirer.prompt([
    { type: "input", name: "nome", message: "Nome do usuário:" },
    { type: "input", name: "email", message: "E-mail do usuário:" },
    { type: "input", name: "senha", message: "Senha do usuário:" },
  ]);

  try {
    await addUsuarioController(respostas.nome, respostas.email, respostas.senha);
    console.log("Usuário inserido com sucesso!");
  } catch (error) {
    console.log(`Erro ao inserir usuário ${error}`);
  }
}

async function adicionarEvento() {
  const respostas = await inquirer.prompt([
    { type: "input", name: "nome", message: "Nome do evento:" },
    { type: "input", name: "data", message: "Data do evento (YYYY-MM-DD):" },
    { type: "input", name: "usuario_id", message: "ID do usuário associado ao evento:" },
  ]);

  try {
    await addEventoController(respostas.nome, respostas.data, Number(respostas.usuario_id));
    console.log("Evento inserido com sucesso!");
  } catch (error) {
    console.error(`Erro ao inserir evento ${error}`);
  }
}

// Inicia o menu principal
mainMenu();
