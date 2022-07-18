import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmploiPage } from './emploi.page';

describe('EmploiPage', () => {
  let component: EmploiPage;
  let fixture: ComponentFixture<EmploiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
