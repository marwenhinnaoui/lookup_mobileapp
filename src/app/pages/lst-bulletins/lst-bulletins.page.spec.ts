import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LstBulletinsPage } from './lst-bulletins.page';

describe('LstBulletinsPage', () => {
  let component: LstBulletinsPage;
  let fixture: ComponentFixture<LstBulletinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstBulletinsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LstBulletinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
