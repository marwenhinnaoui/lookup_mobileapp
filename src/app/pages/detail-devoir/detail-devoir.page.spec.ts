import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailDevoirPage } from './detail-devoir.page';

describe('DetailDevoirPage', () => {
  let component: DetailDevoirPage;
  let fixture: ComponentFixture<DetailDevoirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDevoirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailDevoirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
