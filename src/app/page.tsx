"use client";
import { useEffect, useState } from "react";
import Timetable from "./Timetable";

interface Activity {
  Activity: string;
  "Begin time": string;
  "End time": string;
  Room: string;
  Day: string;
}

interface Occurrence {
  Occurrence: string;
  Activities: Activity[];
}

interface Course {
  "Course Name": string;
  "Course Code": string;
  Occurrences: Occurrence[];
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedOccurrence, setSelectedOccurrence] = useState<string | null>(
    null
  );

  // Fetch the JSON data
  useEffect(() => {
    fetch("/course_data_final_fixed.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedCourses = data.map((course: Course) => ({
          ...course,
          Occurrences: course.Occurrences.sort(
            (a, b) => parseInt(a.Occurrence) - parseInt(b.Occurrence)
          ),
        }));
        setCourses(sortedCourses);
      });
  }, []);

  const handleOccurrenceSelect = (occurrence: string) => {
    setSelectedOccurrence(occurrence);
  };

  const isOccurrenceDisabled = (course: Course, occurrence: Occurrence) => {
    if (!selectedOccurrence) return false;

    const selectedCourse = courses.find((c) =>
      c.Occurrences.some((o) => o.Occurrence === selectedOccurrence)
    );

    if (!selectedCourse) return false;

    const selectedActivities =
      selectedCourse.Occurrences.find(
        (o) => o.Occurrence === selectedOccurrence
      )?.Activities || [];

    return occurrence.Activities.some((activity) =>
      selectedActivities.some(
        (selectedActivity) =>
          activity.Day === selectedActivity.Day &&
          ((activity["Begin time"] >= selectedActivity["Begin time"] &&
            activity["Begin time"] < selectedActivity["End time"]) ||
            (activity["End time"] > selectedActivity["Begin time"] &&
              activity["End time"] <= selectedActivity["End time"]) ||
            (activity["Begin time"] <= selectedActivity["Begin time"] &&
              activity["End time"] >= selectedActivity["End time"]))
      )
    );
  };

  return (
    <div className="flex flex-col p-6 space-y-6">
      <Timetable
        courses={courses}
        selectedOccurrence={selectedOccurrence}
        onOccurrenceSelect={handleOccurrenceSelect}
      />
      {courses.map((course, index) => (
        <div key={index} className="flex items-start space-x-4">
          {/* Course Name and Code */}
          <div className="w-1/4 p-4">
            <h3 className="text-xl font-semibold">{course["Course Name"]}</h3>
            <p className="text-gray-500">{course["Course Code"]}</p>
          </div>

          {/* Occurrence and Activities */}
          <div className="flex w-3/4 flex-wrap">
            {course.Occurrences.map((occurrence, idx) => (
              <div
                key={idx}
                className={`w-1/4 p-4 mb-4 border ${
                  selectedOccurrence === occurrence.Occurrence
                    ? "bg-blue-200"
                    : isOccurrenceDisabled(course, occurrence)
                    ? "bg-gray-200 cursor-not-allowed"
                    : "border-red-500"
                }`}
              >
                {/* Occurrence with radio button */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`occurrence-${course["Course Code"]}`}
                    value={occurrence.Occurrence}
                    checked={selectedOccurrence === occurrence.Occurrence}
                    onChange={() =>
                      handleOccurrenceSelect(occurrence.Occurrence)
                    }
                    disabled={isOccurrenceDisabled(course, occurrence)}
                    className="form-radio"
                  />
                  <span className="text-lg font-semibold">
                    {occurrence.Occurrence}
                  </span>
                </label>
                {occurrence.Activities.map((activity, i) => (
                  <div key={i} className="mt-2 pt-2 border-t border-gray-400">
                    <p className="font-semibold">{activity.Activity}</p>
                    <p>
                      {activity["Begin time"]} - {activity["End time"]}
                    </p>
                    <p className="text-sm text-gray-600">{activity.Day}</p>
                    <p>{activity.Room}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
