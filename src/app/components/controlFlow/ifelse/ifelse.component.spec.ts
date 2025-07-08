import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFElseComponent } from './ifelse.component';

describe('IFElseComponent', () => {
  let component: IFElseComponent;
  let fixture: ComponentFixture<IFElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IFElseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
