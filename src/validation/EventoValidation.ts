import z from 'zod';

export const eventoSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório").max(100, "O nome não pode ter mais de 100 caracteres"),
    data: z.string().refine((val) => !isNaN(Date.parse(val)), "Data inválida"),
    usuario_id: z.number().positive("ID do usuário deve ser positivo"),
});
  