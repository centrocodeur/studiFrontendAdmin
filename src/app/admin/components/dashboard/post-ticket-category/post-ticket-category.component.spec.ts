import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTicketCategoryComponent } from './post-ticket-category.component';

describe('PostTicketCategoryComponent', () => {
  let component: PostTicketCategoryComponent;
  let fixture: ComponentFixture<PostTicketCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTicketCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTicketCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
