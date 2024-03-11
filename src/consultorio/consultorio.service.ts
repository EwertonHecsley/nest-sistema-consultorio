import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ConsultorioService {
    constructor(private readonly prisma: DatabaseService) { }

    async buscarConsultorios() {
        return await this.prisma.consultorio.findMany();
    }
}
