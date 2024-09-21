import { Course, Occurrence } from "./interfaces";
import { ActivityDetails } from "./ActivityDetails";

export const OccurrenceItem = ({
  course,
  occurrence,
  selectedOccurrence,
  onOccurrenceSelect,
  isDisabled,
}: {
  course: Course;
  occurrence: Occurrence;
  selectedOccurrence: string | undefined;
  onOccurrenceSelect: (courseCode: string, occurrence: string) => void;
  isDisabled: boolean;
}) => {
  return (
    <div
      className={`w-1/4 p-4 mb-4 border ${
        selectedOccurrence === occurrence.Occurrence
          ? "bg-blue-200"
          : isDisabled
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
          onClick={() =>
            onOccurrenceSelect(course["Course Code"], occurrence.Occurrence)
          }
          disabled={isDisabled}
          className="form-radio"
        />
        <span className="text-lg font-semibold">{occurrence.Occurrence}</span>
      </label>

      {/* Activity Details */}
      {occurrence.Activities.map((activity, i) => (
        <ActivityDetails key={i} activity={activity} />
      ))}
    </div>
  );
};
