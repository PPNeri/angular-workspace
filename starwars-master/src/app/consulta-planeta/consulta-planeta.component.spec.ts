import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPlanetaComponent } from './consulta-planeta.component';

describe('ConsultaPlanetaComponent', () => {
  let component: ConsultaPlanetaComponent;
  let fixture: ComponentFixture<ConsultaPlanetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPlanetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
