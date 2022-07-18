import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoyagesConPage } from './voyages-con.page';

describe('VoyagesConPage', () => {
  let component: VoyagesConPage;
  let fixture: ComponentFixture<VoyagesConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagesConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoyagesConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
