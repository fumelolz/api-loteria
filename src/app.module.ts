import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartasModule } from './cartas/cartas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablasModule } from './tablas/tablas.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), CartasModule, TablasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
