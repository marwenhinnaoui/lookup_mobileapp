import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnonceEnPage } from './annonce-en.page';

describe('AnnonceEnPage', () => {
  let component: AnnonceEnPage;
  let fixture: ComponentFixture<AnnonceEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnonceEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
