'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Course } from '@/types/courses';
import { courses } from '@/data/courses';

export default function NotesPage() {
  const router = useRouter();

  const handleCourseClick = (course: Course) => {
    router.push(`/notes/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Course & Book Notes</h1>
          <p className="text-lg text-gray-600">Select a course or book to view notes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="group relative h-[280px] rounded-xl bg-white p-1 
                       transition-all duration-300 hover:scale-[1.02]
                       active:scale-[0.98]"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${course.borderGradient} opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Card Content Container */}
              <div className="relative h-full w-full rounded-lg bg-white p-5 overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} 
                                mix-blend-multiply rounded-lg`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Type Tag - Centered */}
                  <div className="flex justify-center mb-4">
                    <div className="inline-block px-3 py-1 text-xs font-medium 
                                bg-gray-100 text-gray-600 rounded-full">
                      {course.type === 'course' ? 'Course' : 'Book'}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-bold text-gray-900">
                      {course.shortTitle}
                    </h2>
                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {course.description}
                  </p>

                  {/* Authors (for books) */}
                  {course.authors && (
                    <div className="mt-auto pt-4 text-sm text-gray-500 border-t">
                      by {course.authors.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
