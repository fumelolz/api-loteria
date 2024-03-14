import { Module } from '@nestjs/common';
import { TablasService } from './tablas.service';
import { TablasController } from './tablas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tablas } from 'src/_common/_entities/tablas.entity';
import { cartas } from 'src/_common/_entities/cartas.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([tablas,cartas])
  ],
  providers: [TablasService],
  controllers: [TablasController],
  exports: [TablasService]
})
export class TablasModule {}
