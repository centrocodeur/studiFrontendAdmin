import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompetitionComponent } from './post-competition.component';

describe('PostCompetitionComponent', () => {
  let component: PostCompetitionComponent;
  let fixture: ComponentFixture<PostCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCompetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
