import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MedicoDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
    @IsString()
    nome: string;

    @IsNotEmpty({ message: 'O campo especialidade é obrigatório.' })
    @IsString()
    especialidade: string;

    @IsOptional()
    id?: number;
}