import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicarComponent } from './multiplicar.component';

describe('MultiplicarComponent', () => {
  let component: MultiplicarComponent;
  let fixture: ComponentFixture<MultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should multiply two numbers', () => {
    const result = component.multiplicar(2, 3);
    expect(result).toBe(6);
  });

  it('should handle zero multiplication', () => {
    const result = component.multiplicar(0, 5);
    expect(result).toBe(0);
  });
});
