import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { Response } from 'express';
import { ConsultorioDto } from './dto/constultorio.dto';

@Controller('consultorio')
export class ConsultorioController {
    constructor(private readonly consultorioService: ConsultorioService) { }

    @Post()
    async create(@Body() data: ConsultorioDto, @Res() res: Response) {
        const result = await this.consultorioService.criarConsultorio(data);
        const { senha: _, medicos: __, ...response } = result;

        return res.status(HttpStatus.CREATED).json(response);

    }

    @Get()
    async listall(@Res() res: Response) {
        const result = await this.consultorioService.buscarConsultorios();

        return res.status(HttpStatus.OK).json(result);
    }
}
