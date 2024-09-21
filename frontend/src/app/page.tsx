"use client";
import { useEffect, useState, useCallback } from "react";
import Timetable from "./components/Timetable";
import { CourseDetails } from "./components/CourseDetails";
import { Course, Activity, Occurrence } from "./components/interfaces";
import _ from "lodash";

// Utility Functions
const sortOccurrencesByNumber = (occurrences: Occurrence[]): Occurrence[] =>
  _.sortBy(occurrences, (occurrence) => parseInt(occurrence.Occurrence));

const doesOccurrenceConflict = (
  selectedActivities: Activity[],
  occurrence: Occurrence
): boolean =>
  occurrence.Activities.some((activity) =>
    selectedActivities.some(
      (selectedActivity) =>
        activity.Day === selectedActivity.Day &&
        !(
          activity["Begin time"] >= selectedActivity["End time"] ||
          activity["End time"] <= selectedActivity["Begin time"]
        )
    )
  );

// Fetch Courses Data
const fetchCoursesData = async (): Promise<Course[]> => {
  const response = await fetch("/course_data.json");
  const data: Course[] = await response.json();
  return data.map((course) => ({
    ...course,
    Occurrences: sortOccurrencesByNumber(course.Occurrences),
  }));
};

// Main Home Component
export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedOccurrences, setSelectedOccurrences] = useState<
    Map<string, string>
  >(new Map());

  // Fetch courses when component mounts
  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCoursesData();
      setCourses(data);
    };
    loadCourses();
  }, []);

  // Handle Occurrence Selection and Unselection
  const handleOccurrenceSelect = useCallback(
    (courseCode: string, occurrence: string) => {
      setSelectedOccurrences((prev) => {
        const updatedSelections = new Map(prev); // Clone the current selections map
        const currentSelection = updatedSelections.get(courseCode);
        if (currentSelection === occurrence) {
          // If the user clicked the selected occurrence, unselect it (remove it)
          console.log("Remove it!");
          updatedSelections.delete(courseCode);
        } else {
          // Otherwise, select the occurrence
          updatedSelections.set(courseCode, occurrence);
        }

        return new Map(updatedSelections); // Return the new updated map to trigger a re-render
      });
    },
    []
  );

  // Check if Occurrence is Disabled
  const isOccurrenceDisabled = useCallback(
    (course: Course, occurrence: Occurrence): boolean => {
      if (selectedOccurrences.size === 0) return false;

      const selectedActivitiesByOtherCourses: Activity[] = [];

      courses.forEach((c) => {
        if (c["Course Code"] !== course["Course Code"]) {
          const selectedOccurrence = selectedOccurrences.get(c["Course Code"]);
          if (selectedOccurrence) {
            const selectedOccurrenceActivities =
              c.Occurrences.find((o) => o.Occurrence === selectedOccurrence)
                ?.Activities || [];
            selectedActivitiesByOtherCourses.push(
              ...selectedOccurrenceActivities
            );
          }
        }
      });

      return doesOccurrenceConflict(
        selectedActivitiesByOtherCourses,
        occurrence
      );
    },
    [selectedOccurrences, courses]
  );

  return (
    <div className="flex flex-col p-6 space-y-6">
      {/* Pass the selected occurrences to the Timetable component */}
      <Timetable courses={courses} selectedOccurrences={selectedOccurrences} />
      {courses.map((course, index) => (
        <CourseDetails
          key={index}
          course={course}
          selectedOccurrences={selectedOccurrences}
          onOccurrenceSelect={handleOccurrenceSelect}
          isOccurrenceDisabled={isOccurrenceDisabled}
        />
      ))}
    </div>
  );
}
