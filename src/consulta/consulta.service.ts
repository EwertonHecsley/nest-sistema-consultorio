import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ConsultaDto } from './dto/consulta.dto';

@Injectable()
export class ConsultaService {
    constructor(
        private readonly prisma: DatabaseService
    ) { }

    async listarConsultas() {
        return await this.prisma.consulta.findMany();
    }

    async verificaConsultaEncerrada(pacienteId: number) {
        return await this.prisma.consulta.findFirst({ where: { pacienteId } })
    }

    async cadastrarConsulta(dataConsulta: ConsultaDto) {
        const { tipoConsulta, valorConsulta, paciente } = dataConsulta;

        const verifyStatusConsulta = await this.verificaConsultaEncerrada(paciente.id);
        if (verifyStatusConsulta) throw new HttpException('Já existe uma consulta em andamento com o cpf ou e-mail informado!', HttpStatus.BAD_REQUEST);

        const consulta = await this.prisma.consulta.create({
            data: {
                tipoConsulta,
                valorConsulta,
                paciente: {
                    connect: {
                        id: paciente.id
                    }
                }
            }
        })

        return consulta;
    }
}
