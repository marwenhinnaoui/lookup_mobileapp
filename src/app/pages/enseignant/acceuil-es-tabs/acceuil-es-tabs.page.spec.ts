import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceuilEsTabsPage } from './acceuil-es-tabs.page';

describe('AcceuilEsTabsPage', () => {
  let component: AcceuilEsTabsPage;
  let fixture: ComponentFixture<AcceuilEsTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilEsTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceuilEsTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
