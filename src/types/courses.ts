export interface Course {
  id: string;
  type: 'course' | 'book';
  title: string;
  shortTitle: string;
  description: string;
  authors?: string[];
  gradientFrom: string;
  gradientTo: string;
  borderGradient: string;
  image: string;
}
