import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeAdPage } from './demande-ad.page';

describe('DemandeAdPage', () => {
  let component: DemandeAdPage;
  let fixture: ComponentFixture<DemandeAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
