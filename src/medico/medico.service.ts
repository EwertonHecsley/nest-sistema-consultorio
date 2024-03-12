import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MedicoDto } from './dto/medico.dto';

@Injectable()
export class MedicoService {
    constructor(
        private readonly prisma: DatabaseService
    ) { }

    async cadastrarMedico(dataMedico: MedicoDto): Promise<MedicoDto> {
        const { nome, especialidade } = dataMedico;
        const novoMedico = await this.prisma.medico.create({
            data: {
                nome,
                especialidade
            }
        });
        return novoMedico;
    }

    async listarMedicos(): Promise<MedicoDto[]> {
        return await this.prisma.medico.findMany();
    }

    async buscarMedicoPorId(id: number): Promise<MedicoDto> {
        return await this.prisma.medico.findUnique({ where: { id } });
    }

    async deletarMedico(id: number) {
        return await this.prisma.medico.delete({ where: { id } });
    }
}
