import { Test, TestingModule } from '@nestjs/testing';
import { TablasController } from './tablas.controller';

describe('TablasController', () => {
  let controller: TablasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TablasController],
    }).compile();

    controller = module.get<TablasController>(TablasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
