import { Course } from '@/types/courses';

// TODO: grab from postgres DB 
export const courses: Course[] = [
  {
    id: 'cs161',
    type: 'course',
    title: 'CS 161: Computer Security',
    shortTitle: 'CS 161',
    description: 'Introduction to Computer Security',
    gradientFrom: 'from-red-500/10',
    gradientTo: 'to-orange-500/10',
    borderGradient: 'from-red-500 to-orange-500',
    image: '/images/security.jpg'
  },
  {
    id: 'eecs126',
    type: 'course',
    title: 'EECS 126: Probability and Random Processes',
    shortTitle: 'EECS 126',
    description: 'Probability Theory and Stochastic Processes',
    gradientFrom: 'from-blue-500/10',
    gradientTo: 'to-purple-500/10',
    borderGradient: 'from-blue-500 to-purple-500',
    image: '/images/probability.jpg'
  },
  {
    id: 'cs162',
    type: 'course',
    title: 'CS 162: Operating Systems',
    shortTitle: 'CS 162',
    description: 'Operating Systems and System Programming',
    gradientFrom: 'from-green-500/10',
    gradientTo: 'to-emerald-500/10',
    borderGradient: 'from-green-500 to-emerald-500',
    image: '/images/os.jpg'
  },
  {
    id: 'ddia',
    type: 'book',
    title: 'Designing Data-Intensive Applications',
    shortTitle: 'DDIA',
    description: 'The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
    authors: ['Martin Kleppmann'],
    gradientFrom: 'from-yellow-500/10',
    gradientTo: 'to-amber-500/10',
    borderGradient: 'from-yellow-500 to-amber-500',
    image: '/images/ddia.jpg'
  },
];
