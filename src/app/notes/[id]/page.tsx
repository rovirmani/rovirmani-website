'use client';

import { useParams, useRouter } from 'next/navigation';
import { NoteCollection } from '@/components/NoteCollection';
import { courses } from '@/data/courses';


export default function NotePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Note not found</h1>
            <button
              onClick={() => router.push('/notes')}
              className="text-blue-600 hover:text-blue-800"
            >
              Back to all notes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.push('/notes')}
          className="mb-8 text-sm text-gray-600 hover:text-blue-600 
                   flex items-center gap-2 group px-4 py-2 rounded-lg 
                   hover:bg-white/50 transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to all notes
        </button>

        <NoteCollection
          type={course.type}
          title={course.title}
          description={course.description}
          authors={course.authors}
          sections={[]} // You'll populate this with actual notes data
        />
      </div>
    </div>
  );
}
