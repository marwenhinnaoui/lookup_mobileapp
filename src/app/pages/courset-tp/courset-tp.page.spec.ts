import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursetTpPage } from './courset-tp.page';

describe('CoursetTpPage', () => {
  let component: CoursetTpPage;
  let fixture: ComponentFixture<CoursetTpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursetTpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursetTpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
