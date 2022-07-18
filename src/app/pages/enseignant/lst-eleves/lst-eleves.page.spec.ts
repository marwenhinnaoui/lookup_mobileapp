import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LstElevesPage } from './lst-eleves.page';

describe('LstElevesPage', () => {
  let component: LstElevesPage;
  let fixture: ComponentFixture<LstElevesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstElevesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LstElevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
