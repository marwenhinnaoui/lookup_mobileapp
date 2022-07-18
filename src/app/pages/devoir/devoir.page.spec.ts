import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevoirPage } from './devoir.page';

describe('DevoirPage', () => {
  let component: DevoirPage;
  let fixture: ComponentFixture<DevoirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevoirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
