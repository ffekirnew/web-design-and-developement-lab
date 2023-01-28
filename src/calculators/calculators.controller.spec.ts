import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorsController } from './calculators.controller';
import { CalculatorsService } from './calculators.service';

describe('CalculatorsController', () => {
  let controller: CalculatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorsController],
      providers: [CalculatorsService],
    }).compile();

    controller = module.get<CalculatorsController>(CalculatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
