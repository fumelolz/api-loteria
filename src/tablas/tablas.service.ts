import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tablas } from 'src/_common/_entities/tablas.entity';
import { Repository } from 'typeorm';
import { CreateTablaDto } from './dto/createTabla.dto';
import { cartas } from 'src/_common/_entities/cartas.entity';

@Injectable()
export class TablasService {
    constructor(
        @InjectRepository(tablas)
        private tablasRepository: Repository<tablas>,
        @InjectRepository(cartas)
        private cartasRepository: Repository<cartas>,
      ) {}
    
      findAll(): Promise<tablas[]> {
        return this.tablasRepository.find({
            relations: ['carta1','carta2','carta3','carta4','carta5','carta6','carta7','carta8','carta9','carta10','carta11','carta12'],
        });
      }

      findOne(id: number): Promise<tablas>{
        return this.tablasRepository.findOne({
          where: {
            id: id
          },
          relations: ['carta1','carta2','carta3','carta4','carta5','carta6','carta7','carta8','carta9','carta10','carta11','carta12'],
        });
      }

      async create(body: CreateTablaDto): Promise<tablas> {
        const newTabla = new tablas();
        newTabla.nombre = body.nombre;
        newTabla.carta1 = await this.cartasRepository.findOneBy({ id:body.carta1 });
        newTabla.carta2 = await this.cartasRepository.findOneBy({ id:body.carta2 });
        newTabla.carta3 = await this.cartasRepository.findOneBy({ id:body.carta3 });
        newTabla.carta4 = await this.cartasRepository.findOneBy({ id:body.carta4 });
        newTabla.carta5 = await this.cartasRepository.findOneBy({ id:body.carta5 });
        newTabla.carta6 = await this.cartasRepository.findOneBy({ id:body.carta6 });
        newTabla.carta7 = await this.cartasRepository.findOneBy({ id:body.carta7 });
        newTabla.carta8 = await this.cartasRepository.findOneBy({ id:body.carta8 });
        newTabla.carta9 = await this.cartasRepository.findOneBy({ id:body.carta9 });
        newTabla.carta10 = await this.cartasRepository.findOneBy({ id:body.carta10 });
        newTabla.carta11 = await this.cartasRepository.findOneBy({ id:body.carta11 });
        newTabla.carta12 = await this.cartasRepository.findOneBy({ id:body.carta12 });
        return this.tablasRepository.save(newTabla);
      }
    
}
