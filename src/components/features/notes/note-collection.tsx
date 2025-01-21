'use client';

import React, { useState } from 'react';
import { cn, toggleSet } from '@/lib/utils';
import { Course } from '@/types/courses';
import { Section } from '@/types/notes';

interface NoteCollectionProps extends Pick<Course, 'type' | 'title' | 'description' | 'authors'> {
  sections: Section[];
}

export const NoteCollection: React.FC<NoteCollectionProps> = ({
  type,
  title,
  description,
  authors,
  sections,
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => toggleSet(prev, sectionTitle));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
        <p className="text-gray-600 mb-2">{description}</p>
        {authors && (
          <p className="text-sm text-gray-500">
            by {authors.join(", ")}
          </p>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full text-left p-4 flex justify-between items-center 
                       hover:bg-gray-50 transition-all duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              <svg
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform",
                  expandedSections.has(section.title) ? "rotate-180" : ""
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Subsections */}
            {expandedSections.has(section.title) && section.subsections && (
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-white rounded-md p-4 shadow-sm 
                               hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-medium text-gray-800 mb-2">
                        {subsection.title}
                      </h3>
                      {subsection.content && (
                        <p className="text-sm text-gray-600">
                          {subsection.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
