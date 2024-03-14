import { IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { PacienteDto } from "src/paciente/dto/paciente.dto";

export class ConsultaDto {

    @IsNotEmpty({ message: 'O campo tipo de consulta é obrigatório.' })
    @IsString()
    tipoConsulta: string;

    @IsNotEmpty({ message: 'O campo valor da consulta é obrigatório.' })
    @IsNumber()
    valorConsulta: number;

    @IsNotEmptyObject()
    @IsObject()
    paciente: PacienteDto;

    @IsOptional()
    id?: number;
}