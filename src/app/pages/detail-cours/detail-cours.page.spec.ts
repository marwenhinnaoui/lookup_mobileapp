import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCoursPage } from './detail-cours.page';

describe('DetailCoursPage', () => {
  let component: DetailCoursPage;
  let fixture: ComponentFixture<DetailCoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
