import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { TablasService } from './tablas.service';
import { CreateTablaDto } from './dto/createTabla.dto';

@Controller('tablas')
export class TablasController {
  constructor(private readonly tablasService: TablasService) {}

  @Get()
  async findAll() {
    return this.tablasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.tablasService.findOne(id)
  }

  @Post()
  async create(@Body() body: CreateTablaDto) {
    try {
      return await this.tablasService.create(body);
    } catch (err) {
      if (
        String(err.originalError.info.message).includes(
          'The INSERT statement conflicted with the CHECK constraint',
        )
      ) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'No se pueden repetir cartas en la tabla',
          },
          HttpStatus.CONFLICT,
          {
            cause: err,
          },
        );
      }
      if (
        String(err.originalError.info.message).includes(
          'Cannot insert duplicate key row in object',
        )
      ) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'Ya existe una tabla con las mismas cartas',
          },
          HttpStatus.CONFLICT,
          {
            cause: err,
          },
        );
      }
    }
  }
}
