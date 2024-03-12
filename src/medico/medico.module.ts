import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
    providers: [MedicoService, DatabaseService],
    controllers: [MedicoController]
})
export class MedicoModule { }
