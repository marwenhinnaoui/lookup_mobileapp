import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuConPage } from './menu-con.page';

describe('MenuConPage', () => {
  let component: MenuConPage;
  let fixture: ComponentFixture<MenuConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
