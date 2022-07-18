import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoVoyagePage } from './info-voyage.page';

describe('InfoVoyagePage', () => {
  let component: InfoVoyagePage;
  let fixture: ComponentFixture<InfoVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
