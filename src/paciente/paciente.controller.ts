import { Body, Controller, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { PacienteDto } from './dto/paciente.dto';
import { Response } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) { }

    @Post()
    async create(@Body() dataPaciente: PacienteDto, @Res() res: Response) {
        const result = await this.pacienteService.criarPaciente(dataPaciente);
        const { senha: _, ...paciente } = result;

        return res.status(HttpStatus.CREATED).json(paciente);
    }
}
