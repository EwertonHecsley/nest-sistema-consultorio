import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ConsultorioDto } from './dto/constultorio.dto';

@Injectable()
export class ConsultorioService {
    constructor(private readonly prisma: DatabaseService) { }

    async buscarConsultorios(): Promise<ConsultorioDto[]> {
        return await this.prisma.consultorio.findMany();
    }
}
