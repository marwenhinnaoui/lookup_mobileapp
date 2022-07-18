import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservationsPage } from './observations.page';

describe('ObservationsPage', () => {
  let component: ObservationsPage;
  let fixture: ComponentFixture<ObservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
