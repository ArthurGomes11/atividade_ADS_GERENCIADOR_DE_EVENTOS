"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.usuarioSchema = zod_1.default.object({
    nome: zod_1.default.string().min(1, "O nome é obrigatório").max(100, "O nome não pode ter mais de 100 caracteres"),
    email: zod_1.default.string().min(6, "No minímo 6 caracteres").max(30, "O email não pode ter mais de 30 caracteres"),
    senha: zod_1.default.string().min(8, "A senha é obrigatória").
        max(30, "A senha não pode ter mais de 30 caracteres").
        regex(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/))
});
