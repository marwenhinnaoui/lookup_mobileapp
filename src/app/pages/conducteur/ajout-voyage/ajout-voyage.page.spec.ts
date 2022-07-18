import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutVoyagePage } from './ajout-voyage.page';

describe('AjoutVoyagePage', () => {
  let component: AjoutVoyagePage;
  let fixture: ComponentFixture<AjoutVoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutVoyagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
