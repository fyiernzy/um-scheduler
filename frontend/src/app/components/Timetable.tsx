import React, { useState, useEffect } from "react";
import { Course, Activity } from "./interfaces";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const HOURS = Array.from({ length: 12 }, (_, i) => i + 8);

interface TimetableProps {
  courses: Course[];
  selectedOccurrences: Map<string, string>;
}

// Mapping short days (Mon, Tue, etc.) to full day names
const dayMap: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
};

const convertTo24HourFormat = (time: string): number => {
  // Convert "HH:MM AM/PM" to 24-hour format
  const [hour, minutePart] = time.split(":");
  let [minutes, period] = minutePart.split(" ");

  let hour24 = parseInt(hour);
  if (period === "PM" && hour24 !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour24 === 12) {
    hour24 = 0;
  }
  return hour24;
};

const Timetable: React.FC<TimetableProps> = ({
  courses,
  selectedOccurrences,
}) => {
  const [occupiedSlots, setOccupiedSlots] = useState<
    Record<string, Activity[]>
  >({});

  useEffect(() => {
    const newOccupiedSlots: Record<string, Activity[]> = {};

    courses.forEach((course) => {
      const selectedOccurrenceId = selectedOccurrences.get(
        course["Course Code"]
      );
      if (selectedOccurrenceId) {
        const selectedOccurrence = course.Occurrences.find(
          (occurrence) => occurrence.Occurrence === selectedOccurrenceId
        );
        if (selectedOccurrence) {
          selectedOccurrence.Activities.forEach((activity) => {
            const day = dayMap[activity.Day]; // Map the day abbreviation to the full day name
            if (!day) return; // Handle invalid day mapping
            const startHour = convertTo24HourFormat(activity["Begin time"]);
            const endHour = convertTo24HourFormat(activity["End time"]);

            for (let hour = startHour; hour < endHour; hour++) {
              const key = `${day}-${hour}`;
              if (!newOccupiedSlots[key]) {
                newOccupiedSlots[key] = [];
              }
              newOccupiedSlots[key].push(activity); // Push all activities into the same slot
            }
          });
        }
      }
    });

    setOccupiedSlots(newOccupiedSlots);
  }, [courses, selectedOccurrences]);

  const isSlotOccupied = (day: string, hour: number) => {
    return occupiedSlots[`${day}-${hour}`];
  };

  const renderCell = (day: string, hour: number) => {
    const activities = isSlotOccupied(day, hour);
    if (activities) {
      return activities.map((activity, idx) => (
        <div key={idx} className="bg-blue-200 p-1 text-xs">
          <div>{activity.Activity}</div>
          <div>
            {activity["Begin time"]} - {activity["End time"]}
          </div>
          <div>{activity.Room}</div>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2"></th>
            {HOURS.map((hour) => (
              <th key={hour} className="border p-2">
                {`${hour}:00`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAYS.map((day) => (
            <tr key={day}>
              <td className="border p-2 font-bold">{day}</td>
              {HOURS.map((hour) => (
                <td key={`${day}-${hour}`} className="border p-2 h-16">
                  {renderCell(day, hour)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
