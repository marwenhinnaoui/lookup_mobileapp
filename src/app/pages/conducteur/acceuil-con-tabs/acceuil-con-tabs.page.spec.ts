import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceuilConTabsPage } from './acceuil-con-tabs.page';

describe('AcceuilConTabsPage', () => {
  let component: AcceuilConTabsPage;
  let fixture: ComponentFixture<AcceuilConTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilConTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceuilConTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
