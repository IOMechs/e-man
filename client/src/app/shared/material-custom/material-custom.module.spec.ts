import { MaterialCustomModule } from './material-custom.module';

describe('MaterialCustomModule', () => {
  let materialCustomModule: MaterialCustomModule;

  beforeEach(() => {
    materialCustomModule = new MaterialCustomModule();
  });

  it('should create an instance', () => {
    expect(materialCustomModule).toBeTruthy();
  });
});
