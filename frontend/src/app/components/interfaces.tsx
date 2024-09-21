export interface Activity {
  Activity: string;
  "Begin time": string;
  "End time": string;
  Room: string;
  Day: string;
}

export interface Occurrence {
  Occurrence: string;
  Activities: Activity[];
}

export interface Course {
  "Course Name": string;
  "Course Code": string;
  Occurrences: Occurrence[];
}

export interface CourseDetailsProps {
  course: Course;
  selectedOccurrences: Map<string, string>;
  onOccurrenceSelect: (courseCode: string, occurrence: string) => void;
  isOccurrenceDisabled: (course: Course, occurrence: Occurrence) => boolean;
}
