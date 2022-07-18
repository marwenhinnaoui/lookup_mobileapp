import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PunitionPage } from './punition.page';

describe('PunitionPage', () => {
  let component: PunitionPage;
  let fixture: ComponentFixture<PunitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PunitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
