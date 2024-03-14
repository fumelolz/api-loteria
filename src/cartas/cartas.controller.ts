import { Controller, Get } from '@nestjs/common';
import { CartasService } from './cartas.service';

@Controller('cartas')
export class CartasController {
    constructor(private readonly cartasService: CartasService) {

    }

    @Get()
    async findAll() {
        return this.cartasService.findAll();
    }
}
