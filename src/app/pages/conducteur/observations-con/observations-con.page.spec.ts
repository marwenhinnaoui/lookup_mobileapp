import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservationsConPage } from './observations-con.page';

describe('ObservationsConPage', () => {
  let component: ObservationsConPage;
  let fixture: ComponentFixture<ObservationsConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationsConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservationsConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
