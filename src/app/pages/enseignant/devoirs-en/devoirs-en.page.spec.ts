import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevoirsEnPage } from './devoirs-en.page';

describe('DevoirsEnPage', () => {
  let component: DevoirsEnPage;
  let fixture: ComponentFixture<DevoirsEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoirsEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevoirsEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
