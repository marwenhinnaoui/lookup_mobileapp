import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailannonceEnPage } from './detailannonce-en.page';

describe('DetailannonceEnPage', () => {
  let component: DetailannonceEnPage;
  let fixture: ComponentFixture<DetailannonceEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailannonceEnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailannonceEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
