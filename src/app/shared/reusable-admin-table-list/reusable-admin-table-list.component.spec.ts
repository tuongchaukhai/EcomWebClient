import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableAdminTableListComponent } from './reusable-admin-table-list.component';

describe('ReusableAdminTableListComponent', () => {
  let component: ReusableAdminTableListComponent;
  let fixture: ComponentFixture<ReusableAdminTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableAdminTableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableAdminTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
