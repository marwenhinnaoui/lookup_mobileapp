import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservationEnPage } from './observation-en.page';

describe('ObservationEnPage', () => {
  let component: ObservationEnPage;
  let fixture: ComponentFixture<ObservationEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservationEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
