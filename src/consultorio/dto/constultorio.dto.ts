import { IsNotEmpty, IsOptional, IsString, Max, Min, min, minLength } from "class-validator";

export class ConsultorioDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
    @IsString()
    nome: string;

    @IsNotEmpty({ message: 'O campo CNES é obrigatório.' })
    @IsString()
    cnes: string;

    @IsNotEmpty({ message: 'O campo senha é obrigatório.' })
    @IsString()
    @Min(4, { message: 'Tamanho mínimo da senha deve ser 4 caracteres.' })
    @Max(8, { message: 'Tamanho máximo da senha deve ser 8 caracteres.' })
    senha: string;

    @IsOptional()
    medicos?: any[];

    @IsOptional()
    id?: number;
}