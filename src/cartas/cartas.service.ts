import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cartas } from 'src/_common/_entities/cartas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartasService {
  constructor(
    @InjectRepository(cartas)
    private cartasRepository: Repository<cartas>,
  ) {}

  findAll(): Promise<cartas[]> {
    return this.cartasRepository.find();
  }

  findOne(id: number): Promise<cartas | null> {
    return this.cartasRepository.findOneBy({ id });
  }
}
