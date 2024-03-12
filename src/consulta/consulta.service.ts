import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ConsultaService {
    constructor(
        private readonly prisma: DatabaseService
    ) { }

    async listarConsultas() {
        return await this.prisma.consulta.findMany();
    }
}
