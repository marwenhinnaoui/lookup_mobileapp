import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TpAjoutEnPage } from './tp-ajout-en.page';

describe('TpAjoutEnPage', () => {
  let component: TpAjoutEnPage;
  let fixture: ComponentFixture<TpAjoutEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpAjoutEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TpAjoutEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
