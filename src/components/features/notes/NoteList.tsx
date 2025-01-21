'use client'

import React, { useState } from 'react'
import { cn, toggleSet } from '@/lib/utils'
import { Course } from '@/data/types'
import { Section } from './types'

interface NoteListProps extends Pick<Course, 'type' | 'title' | 'description' | 'authors'> {
  sections?: Section[]
}

export function NoteList({ type, title, description, authors, sections = [] }: NoteListProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => toggleSet(prev, sectionTitle))
  }

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
            key={section.title}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className={cn(
                "w-full px-6 py-4 text-left transition-colors duration-200",
                "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                expandedSections.has(section.title) && "bg-gray-50"
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
                <svg
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    expandedSections.has(section.title) && "transform rotate-180"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>

            {/* Section Content */}
            {expandedSections.has(section.title) && (
              <div className="px-6 py-4 border-t border-gray-200">
                {section.content && (
                  <div className="prose prose-sm max-w-none text-gray-500">
                    {section.content}
                  </div>
                )}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((subsection: Section, subIndex: number) => (
                      <div key={subsection.title} className="pl-4 border-l-2 border-gray-200">
                        <h3 className="text-sm font-medium text-gray-900">
                          {subsection.title}
                        </h3>
                        {subsection.content && (
                          <p className="mt-1 text-sm text-gray-500">
                            {subsection.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
