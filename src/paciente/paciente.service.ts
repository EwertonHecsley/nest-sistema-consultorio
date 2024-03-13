import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';
import { DatabaseService } from 'src/database/database.service';
import { PacienteDto } from './dto/paciente.dto';

@Injectable()
export class PacienteService {
    constructor(
        private readonly prisma: DatabaseService,
        private readonly hashService: CryptografiaService
    ) { }

    async criarPaciente(dataPaciente: PacienteDto): Promise<PacienteDto> {
        const { nome, email, cpf, celular, dataNascimento, senha } = dataPaciente;

        if (await this.buscarPacienteCpf(cpf)) throw new HttpException('CPF Já cadastrado.', HttpStatus.BAD_REQUEST);

        if (await this.buscarPacienteEmail(email)) throw new HttpException('Email já cadastrado.', HttpStatus.BAD_REQUEST);

        const hashPassword = await this.hashService.hashPassword(senha);

        const paciente = await this.prisma.paciente.create({
            data: {
                nome,
                email,
                cpf,
                celular,
                dataNascimento,
                senha: hashPassword
            }
        })

        return paciente;
    }

    async listarPacientes(): Promise<PacienteDto[]> {
        return await this.prisma.paciente.findMany();
    }

    async buscarPacienteCpf(cpf: string): Promise<PacienteDto> {
        return await this.prisma.paciente.findUnique({ where: { cpf } });
    }

    async buscarPacienteEmail(email: string): Promise<PacienteDto> {
        return await this.prisma.paciente.findUnique({ where: { email } });
    }
}
