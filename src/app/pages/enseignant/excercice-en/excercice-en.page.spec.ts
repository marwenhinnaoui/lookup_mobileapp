import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcerciceEnPage } from './excercice-en.page';

describe('ExcerciceEnPage', () => {
  let component: ExcerciceEnPage;
  let fixture: ComponentFixture<ExcerciceEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciceEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcerciceEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
