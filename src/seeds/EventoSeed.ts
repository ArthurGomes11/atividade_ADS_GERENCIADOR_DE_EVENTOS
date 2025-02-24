import { faker } from "@faker-js/faker";
import db from "../data/database";

const NUM_EVENTOS = 15; 

const seedEvents = () => {
    db.serialize(() => {
        console.log("Limpando tabela de eventos...");
        db.run("DELETE FROM eventos");

        console.log("Inserindo eventos...");
        for (let i = 0; i < NUM_EVENTOS; i++) {
            const nome = faker.lorem.words(3);
            const data = faker.date.future().toISOString().split("T")[0]; // Formato YYYY-MM-DD
            const usuarioId = faker.number.int({ min: 1, max: 10 }); // Assumindo 10 usuários cadastrados

            db.run(
                "INSERT INTO eventos (even_nome, even_data, fk_usua_id) VALUES (?, ?, ?)", 
                [nome, data, usuarioId]
            );
        }

        console.log("Eventos inseridos com sucesso!");
    });
};

seedEvents();
