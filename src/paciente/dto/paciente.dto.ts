import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class PacienteDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
    @IsString()
    nome: string;

    @IsNotEmpty({ message: 'O campo cpf é obrigatório.' })
    @IsString()
    cpf: string;

    @IsNotEmpty({ message: 'O campo data de nascimento é obrigatório.' })
    @IsString()
    dataNascimento: string;

    @IsNotEmpty({ message: 'O campo celular é obrigatório.' })
    @IsString()
    celular: string;

    @IsNotEmpty({ message: 'O campo email é obrigatório.' })
    @IsString()
    @IsEmail({}, { message: 'Formato de email inválido.' })
    email: string;

    @IsNotEmpty({ message: 'O campo senha é obrigatório.' })
    @IsString()
    @MinLength(4, { message: 'Tamanho mínimo de 4 caracteres.' })
    @MaxLength(8, { message: 'Tamanho máximo de 8 caracteres.' })
    senha: string;

    @IsOptional()
    id?: number;
}