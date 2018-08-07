import { SignupDialogModule } from './signup-dialog.module';

describe('SignupDialogModule', () => {
  let signupDialogModule: SignupDialogModule;

  beforeEach(() => {
    signupDialogModule = new SignupDialogModule();
  });

  it('should create an instance', () => {
    expect(signupDialogModule).toBeTruthy();
  });
});
