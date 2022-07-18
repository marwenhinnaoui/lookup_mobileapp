import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LstSeancesPage } from './lst-seances.page';

describe('LstSeancesPage', () => {
  let component: LstSeancesPage;
  let fixture: ComponentFixture<LstSeancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstSeancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LstSeancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
