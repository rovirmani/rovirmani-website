export interface Course {
  id: string;
  type: 'course';
  title: string;
  shortTitle: string;
  description: string;
  authors: string[];
  gradientFrom: string;
  gradientTo: string;
  borderGradient: string;
  image?: string;
}
