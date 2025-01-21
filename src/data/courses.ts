import { Course } from './types'

export const courses: Course[] = [
  {
    id: 'cs61a',
    type: 'course',
    title: 'CS 61A',
    shortTitle: 'CS 61A',
    description: 'Structure and Interpretation of Computer Programs',
    authors: ['John DeNero', 'Paul N. Hilfinger'],
    gradientFrom: 'from-berkeley-blue',
    gradientTo: 'to-berkeley-gold',
    borderGradient: 'ring-berkeley-blue/50 dark:ring-berkeley-gold/50',
    image: '/images/courses/cs61a.png'
  }
  // Add other courses back as they were
]
