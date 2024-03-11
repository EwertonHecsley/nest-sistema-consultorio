import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { Response } from 'express';

@Controller('consultorio')
export class ConsultorioController {
    constructor(private readonly consultorioService: ConsultorioService) { }

    @Get()
    async listarConsultorios(@Res() res: Response) {
        const result = await this.consultorioService.buscarConsultorios();

        return res.status(HttpStatus.OK).json(result);
    }
}
