import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartas } from 'src/_common/_entities/cartas.entity';
import { CartasService } from './cartas.service';
import { CartasController } from './cartas.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([cartas])
  ],
  providers: [CartasService],
  controllers: [CartasController],
  exports:[CartasService]
})
export class CartasModule {}
