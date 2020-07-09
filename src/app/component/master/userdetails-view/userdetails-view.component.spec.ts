import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsViewComponent } from './userdetails-view.component';

describe('UserdetailsViewComponent', () => {
  let component: UserdetailsViewComponent;
  let fixture: ComponentFixture<UserdetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
