import { describe, expect, it } from 'vitest';
import { education, navigation, profile, projects, skillGroups } from '@/components/portfolio/content';

describe('Portfolio content and placeholders', () => {
  it('includes all seven requested sections and three projects', () => {
    expect(navigation).toEqual(['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']);
    expect(projects).toHaveLength(3);
    expect(education).toHaveLength(3);
    expect(skillGroups.flatMap(group => group.skills)).toHaveLength(16);
  });
  it('preserves provided contact details without inventing missing links', () => {
    expect(profile.email).toBe('yogjainj@gmail.com');
    expect(profile.github).toBe('https://github.com/coderyog8021');
    expect(profile.linkedin).toBeNull();
    expect(profile.resume).toBeNull();
    projects.forEach(project => {
      expect(project.github).toBeNull();
      expect(project.demo).toBeNull();
    });
  });
});
