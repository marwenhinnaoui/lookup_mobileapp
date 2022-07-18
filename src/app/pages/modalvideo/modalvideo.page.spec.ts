import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalvideoPage } from './modalvideo.page';

describe('ModalvideoPage', () => {
  let component: ModalvideoPage;
  let fixture: ComponentFixture<ModalvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalvideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
