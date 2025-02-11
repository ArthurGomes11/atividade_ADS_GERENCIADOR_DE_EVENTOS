export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;
}

export interface Evento {
    id?: number;
    nome: string;
    data: string;
    usuario_id: number;
}

export interface Log {
    id?: number;
    acao: string;
    usuario_id: number;
    timestamp: string;
}
