import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailExerciceEnPage } from './detail-exercice-en.page';

describe('DetailExerciceEnPage', () => {
  let component: DetailExerciceEnPage;
  let fixture: ComponentFixture<DetailExerciceEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExerciceEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailExerciceEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
