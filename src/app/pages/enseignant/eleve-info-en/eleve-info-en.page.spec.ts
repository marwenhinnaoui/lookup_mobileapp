import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EleveInfoEnPage } from './eleve-info-en.page';

describe('EleveInfoEnPage', () => {
  let component: EleveInfoEnPage;
  let fixture: ComponentFixture<EleveInfoEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveInfoEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EleveInfoEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
