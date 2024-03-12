import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ConsultorioDto } from './dto/constultorio.dto';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';

@Injectable()
export class ConsultorioService {
    constructor(
        private readonly prisma: DatabaseService,
        private readonly hashService: CryptografiaService
    ) { }

    async criarConsultorio(data: ConsultorioDto): Promise<ConsultorioDto> {
        const { nome, cnes, senha } = data;
        const hashPassword = await this.hashService.hashPassword(senha);

        const consultorio = await this.prisma.consultorio.create({
            data: {
                nome,
                cnes,
                senha: hashPassword
            }
        })

        return consultorio;
    }

    async buscarConsultorios(): Promise<ConsultorioDto[]> {
        return await this.prisma.consultorio.findMany();
    }

    async buscaroConsultorioCnes(cnes: string): Promise<ConsultorioDto> {
        return await this.prisma.consultorio.findUnique({ where: { cnes } });
    }
}
