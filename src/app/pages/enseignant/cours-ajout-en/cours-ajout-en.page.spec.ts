import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursAjoutEnPage } from './cours-ajout-en.page';

describe('CoursAjoutEnPage', () => {
  let component: CoursAjoutEnPage;
  let fixture: ComponentFixture<CoursAjoutEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursAjoutEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursAjoutEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
