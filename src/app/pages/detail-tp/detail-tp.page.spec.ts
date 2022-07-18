import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTPPage } from './detail-tp.page';

describe('DetailTPPage', () => {
  let component: DetailTPPage;
  let fixture: ComponentFixture<DetailTPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
