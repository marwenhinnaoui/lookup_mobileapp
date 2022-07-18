import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursTpEnPage } from './cours-tp-en.page';

describe('CoursTpEnPage', () => {
  let component: CoursTpEnPage;
  let fixture: ComponentFixture<CoursTpEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursTpEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursTpEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
