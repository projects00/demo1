import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrepoComponent } from './adminrepo.component';

describe('AdminrepoComponent', () => {
  let component: AdminrepoComponent;
  let fixture: ComponentFixture<AdminrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
