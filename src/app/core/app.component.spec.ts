import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance;


  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h1> text', () => {
    de = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch('Retro VHS');
  });

  it('should have expected <a> text', () => {
    de = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
    const a = de.nativeElement;
    expect(a.innerText).toMatch('Retro VHS');
  });
});
