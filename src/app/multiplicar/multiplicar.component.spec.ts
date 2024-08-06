import { TestBed } from '@angular/core/testing';
import { MultiplicarComponent } from './multiplicar.component';

describe('MultiplicarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicarComponent],  // Cambiado de declarations a imports
    }).compileComponents();
  });

  it('should multiply two numbers', () => {
    const component = TestBed.createComponent(MultiplicarComponent).componentInstance;
    expect(component.multiplicar(2, 3)).toBe(6);
  });

  it('should handle zero multiplication', () => {
    const component = TestBed.createComponent(MultiplicarComponent).componentInstance;
    expect(component.multiplicar(0, 5)).toBe(0);
  });
});
