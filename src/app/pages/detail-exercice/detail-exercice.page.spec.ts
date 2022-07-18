import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailExercicePage } from './detail-exercice.page';

describe('DetailExercicePage', () => {
  let component: DetailExercicePage;
  let fixture: ComponentFixture<DetailExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
