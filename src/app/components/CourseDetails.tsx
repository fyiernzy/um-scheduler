import { Course, Occurrence } from "./interfaces";
import { OccurrenceItem } from "./OccurrenceItem";

export const CourseDetails = ({
  course,
  selectedOccurrences,
  onOccurrenceSelect,
  isOccurrenceDisabled,
}: {
  course: Course;
  selectedOccurrences: Map<string, string>;
  onOccurrenceSelect: (courseCode: string, occurrence: string) => void;
  isOccurrenceDisabled: (course: Course, occurrence: Occurrence) => boolean;
}) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Course Name and Code */}
      <div className="w-1/4 p-4">
        <h3 className="text-xl font-semibold">{course["Course Name"]}</h3>
        <p className="text-gray-500">{course["Course Code"]}</p>
      </div>

      {/* Occurrences List */}
      <div className="flex w-3/4 flex-wrap">
        {course.Occurrences.map((occurrence, idx) => (
          <OccurrenceItem
            key={idx}
            course={course}
            occurrence={occurrence}
            selectedOccurrence={selectedOccurrences.get(course["Course Code"])}
            onOccurrenceSelect={onOccurrenceSelect}
            isDisabled={isOccurrenceDisabled(course, occurrence)}
          />
        ))}
      </div>
    </div>
  );
};
