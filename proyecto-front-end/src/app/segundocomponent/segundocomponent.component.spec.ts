import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundocomponentComponent } from './segundocomponent.component';

describe('SegundocomponentComponent', () => {
  let component: SegundocomponentComponent;
  let fixture: ComponentFixture<SegundocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundocomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
