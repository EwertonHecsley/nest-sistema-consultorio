import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsultorioService } from 'src/consultorio/consultorio.service';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';
import { PassportModule } from '@nestjs/passport';
import { DatabaseService } from 'src/database/database.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: '30m'
            }
        })
    ],
    providers: [
        AuthService,
        ConsultorioService,
        CryptografiaService,
        DatabaseService,
        JwtService,
        JwtStrategy
    ],
    controllers: [AuthController]
})
export class AuthModule { }
