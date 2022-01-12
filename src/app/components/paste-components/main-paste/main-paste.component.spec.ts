import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPasteComponent } from './main-paste.component';

describe('MainPasteComponent', () => {
  let component: MainPasteComponent;
  let fixture: ComponentFixture<MainPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
