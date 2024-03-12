import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

    @IsNotEmpty({ message: 'O campo CNES é obrigatório.' })
    @IsString()
    cnes: string;

    @IsNotEmpty({ message: 'O campo senha é obrigatório.' })
    @IsString()
    senha: string;
}