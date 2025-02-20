import db from "../data/database";

const dataAtual = new Date();
export const dataString = dataAtual.toISOString().split("T")[0];

export function addLog(log_acao: string, usuario_id: number, logs_timestamp: string) {
    const query = `INSERT INTO logs(logs_acao, fk_usua_id, logs_timestamp) VALUES(?, ?, ?)`;
    db.run(query, [log_acao, usuario_id, logs_timestamp], (erro) => {
        if (erro) {
            console.log(`Erro ao inserir log: ${erro}`);
        } else {
            console.log("Log inserido com sucesso");
        }
    });
};

export function listarEventoPorId(id_usuario : number){
    const query = `SELECT * FROM logs WHERE `
}