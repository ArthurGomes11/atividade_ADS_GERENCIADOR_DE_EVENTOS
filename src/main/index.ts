
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
      choices: [
        "Adicionar Usuário",
        "Listar Usuários",
        "Alterar Usuário",
        "Deletar Usuário",
        "Adicionar Evento",
        "Listar Eventos",
        "Alterar Evento",
        "Deletar Evento",
        "Sair"
      ],
    },
  ]);

  switch (option) {
    case "Adicionar Usuário":
      await adicionarUsuario();
      break;
    case "Listar Usuários":
      await listarUsuarios();
      break;
    case "Alterar Usuário":
      await atualizarUsuario();
      break;
    case "Deletar Usuário":
      await removerUsuario();
      break;
    case "Adicionar Evento":
      await adicionarEvento();
      break;
    case "Listar Eventos":
      await listarTodosEventos();
      break;
    case "Alterar Evento":
      await atualizarEvento();
      break;
    case "Deletar Evento":
      await removerEvento();
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
    { type: "password", name: "senha", message: "Senha do usuário:" },
  ]);

  try {
    await addUsuarioController(respostas.nome, respostas.email, respostas.senha);
    console.log("Usuário inserido com sucesso!");
  } catch (error) {
    console.log(`Erro ao inserir usuário: ${error}`);
  }
}

async function listarUsuarios() {
  try {
    await listarTodos();
  } catch (error) {
    console.error(`Erro ao listar usuários: ${error}`);
  }
}

async function atualizarUsuario() {
  const respostas = await inquirer.prompt([
    { type: "input", name: "id", message: "ID do usuário a ser alterado:" },
    { type: "input", name: "nome", message: "Novo nome do usuário:" },
    { type: "input", name: "email", message: "Novo e-mail do usuário:" },
    { type: "password", name: "senha", message: "Nova senha do usuário:" },
  ]);

  try {
    await alterarUsuario(Number(respostas.id), respostas.nome, respostas.email, respostas.senha);
    console.log("Usuário atualizado com sucesso!");
  } catch (error) {
    console.log(`Erro ao atualizar usuário: ${error}`);
  }
}

async function removerUsuario() {
  const { id } = await inquirer.prompt([
    { type: "input", name: "id", message: "ID do usuário a ser deletado:" },
  ]);

  try {
    await deletarUsuario(Number(id));
    console.log("Usuário deletado com sucesso!");
  } catch (error) {
    console.log(`Erro ao deletar usuário: ${error}`);
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
    console.error(`Erro ao inserir evento: ${error}`);
  }
}

async function listarTodosEventos() {
  try {
    await listarEvento();
  } catch (error) {
    console.error(`Erro ao listar eventos: ${error}`);
  }
}

async function atualizarEvento() {
  const respostas = await inquirer.prompt([
    { type: "input", name: "id", message: "ID do evento a ser alterado:" },
    { type: "input", name: "nome", message: "Novo nome do evento:" },
    { type: "input", name: "data", message: "Nova data do evento (YYYY-MM-DD):" },
    { type: "input", name: "usuario_id", message: "Novo ID do usuário associado:" },
  ]);

  try {
    await alterarEvento(Number(respostas.id), respostas.nome, respostas.data); 
    console.log("Evento atualizado com sucesso!");
  } catch (error) {
    console.log(`Erro ao atualizar evento: ${error}`);
  }
}

async function removerEvento() {
  const { id } = await inquirer.prompt([
    { type: "input", name: "id", message: "ID do evento a ser deletado:" },
  ]);

  try {
    await deletarEvento(Number(id));
    console.log("Evento deletado com sucesso!");
  } catch (error) {
    console.log(`Erro ao deletar evento: ${error}`);
  }
}

// Inicia o menu principal
mainMenu();
