import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTpCoursEnPage } from './detail-tp-cours-en.page';

describe('DetailTpCoursEnPage', () => {
  let component: DetailTpCoursEnPage;
  let fixture: ComponentFixture<DetailTpCoursEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTpCoursEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTpCoursEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
