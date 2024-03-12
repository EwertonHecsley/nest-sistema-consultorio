import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
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

    @Get(':id')
    async buscarMedicoPorId(@Param('id') id: number, @Res() res: Response) {
        const medico = await this.medicoService.buscarMedicoPorId(Number(id));
        if (!medico) throw new HttpException('Médico não encontrado.', HttpStatus.NOT_FOUND);

        return res.status(HttpStatus.OK).json(medico);
    }

    @Get()
    async listarMedicos(@Res() res: Response) {
        const medicos = await this.medicoService.listarMedicos();

        return res.json(medicos);
    }
}
