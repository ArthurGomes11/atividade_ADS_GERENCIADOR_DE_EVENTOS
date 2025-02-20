import z from 'zod';
export const usuarioSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório").max(100, "O nome não pode ter mais de 100 caracteres"),
    email: z.string().min(6, "No minímo 6 caracteres").max(30, "O email não pode ter mais de 30 caracteres"),
    senha:
        z.string().min(8, "A senha é obrigatória").
            max(30, "A senha não pode ter mais de 30 caracteres").
            regex(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/))
});
