import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnonnceUserPage } from './anonnce-user.page';

describe('AnonnceUserPage', () => {
  let component: AnonnceUserPage;
  let fixture: ComponentFixture<AnonnceUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonnceUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnonnceUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
