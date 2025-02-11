import { addusuarios, listarTodos, deletarUsuario, alterarUsuario} from "../services/userService";
import { addevento, listarEvento, deletarEvento, alterarEvento } from "../services/eventService";




console.log("=== Gerenciamento de Eventos ===");


addusuarios("Alice", "alice@gmail.com", "1234");
addevento("Circo", "09/02/2025", 1);

listarTodos();
listarEvento();

alterarEvento(1, "SHOW LUAN SANTANA", "09/12/2021");
alterarUsuario(1, "Amanda", "amanda@gmail.com", "aadad11")

listarTodos();
listarEvento();

deletarEvento(1) 
deletarUsuario(1)