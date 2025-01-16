'use client';

import { useRouter } from 'next/navigation';
import { Course } from '@/types/courses';
import { courses } from '@/data/courses';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { NoteCollection } from "@/components/features/notes/note-collection";

export default function NotesPage() {
  const router = useRouter();

  const handleCourseClick = (course: Course) => {
    router.push(`/notes/${course.id}`);
  };

  const getHighlightClasses = (type: 'course' | 'book') => {
    if (type === 'course') {
      return 'hover:bg-gradient-to-br hover:from-berkeley-blue hover:to-berkeley-gold hover:ring-2 hover:ring-berkeley-blue/50 dark:hover:ring-berkeley-gold/50 group-hover:text-white';
    }
    return 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:ring-2 hover:ring-blue-500/50 dark:hover:ring-purple-500/50 group-hover:text-white';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Course & Book Notes</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Select a course or book to view notes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02]
                       active:scale-[0.98] overflow-hidden ${getHighlightClasses(course.type)}`}
              onClick={() => handleCourseClick(course)}
            >
              <div className="relative z-10 h-full transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg transition-colors group-hover:text-inherit">
                    {course.title}
                  </CardTitle>
                  {course.authors && (
                    <CardDescription className="transition-colors group-hover:text-white/90">
                      by {course.authors.join(', ')}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors group-hover:text-white/80">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium 
                               bg-white/10 rounded-full transition-colors group-hover:bg-white/20
                               group-hover:text-white">
                      {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
