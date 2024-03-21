import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimercomponentComponent } from './primercomponent.component';

describe('PrimercomponentComponent', () => {
  let component: PrimercomponentComponent;
  let fixture: ComponentFixture<PrimercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimercomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
