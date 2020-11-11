import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLauncherComponent } from './test-launcher.component';

describe('TestLauncherComponent', () => {
  let component: TestLauncherComponent;
  let fixture: ComponentFixture<TestLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
