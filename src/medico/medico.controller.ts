import { Body, Controller, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { MedicoDto } from './dto/medico.dto';
import { Response } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('medico')
export class MedicoController {
    constructor(
        private readonly medicoService: MedicoService
    ) { }

    @Post()
    async cadastrarMedico(@Body() dataMedico: MedicoDto, @Res() res: Response) {
        const { nome, especialidade } = dataMedico;
        const medico = await this.medicoService.cadastrarMedico({ nome, especialidade });

        return res.status(HttpStatus.CREATED).json(medico);
    }
}
