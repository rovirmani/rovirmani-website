'use client';

import { useParams, useRouter } from 'next/navigation';
import { NoteCollection } from '@/components/NoteCollection';
import { courses } from '@/data/courses';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function NotePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-lg mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Note not found</CardTitle>
              <CardDescription>The note you're looking for doesn't exist</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => router.push('/notes')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Notes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50/80 to-rose-50/80 dark:from-blue-950 dark:to-green-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.push('/notes')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Notes
          </Button>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              {course.authors && (
                <CardDescription>
                  by {course.authors.join(', ')}
                </CardDescription>
              )}
            </CardHeader>
            {course.description && (
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {course.description}
                </p>
              </CardContent>
            )}
          </Card>
          <NoteCollection
            type={course.type}
            title={course.title}
            description={course.description}
            authors={course.authors}
            sections={[]} // TODO: Add actual sections data
          />
        </div>
      </div>
    </div>
  );
}
