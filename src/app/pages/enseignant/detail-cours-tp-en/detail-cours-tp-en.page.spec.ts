import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCoursTpEnPage } from './detail-cours-tp-en.page';

describe('DetailCoursTpEnPage', () => {
  let component: DetailCoursTpEnPage;
  let fixture: ComponentFixture<DetailCoursTpEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoursTpEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCoursTpEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
