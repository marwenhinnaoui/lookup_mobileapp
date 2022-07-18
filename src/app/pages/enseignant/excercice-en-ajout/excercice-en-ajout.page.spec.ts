import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcerciceEnAjoutPage } from './excercice-en-ajout.page';

describe('ExcerciceEnAjoutPage', () => {
  let component: ExcerciceEnAjoutPage;
  let fixture: ComponentFixture<ExcerciceEnAjoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciceEnAjoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcerciceEnAjoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
