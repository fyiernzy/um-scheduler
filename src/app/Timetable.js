import React, { useState, useEffect } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const HOURS = Array.from({ length: 12 }, (_, i) => i + 8);

const Timetable = ({ courses, selectedOccurrence, onOccurrenceSelect }) => {
  const [occupiedSlots, setOccupiedSlots] = useState({});

  useEffect(() => {
    if (selectedOccurrence) {
      const newOccupiedSlots = {};
      courses.forEach((course) => {
        course.Occurrences.forEach((occurrence) => {
          if (occurrence.Occurrence === selectedOccurrence) {
            occurrence.Activities.forEach((activity) => {
              const day = activity.Day;
              const startHour = parseInt(activity["Begin time"].split(":")[0]);
              const endHour = parseInt(activity["End time"].split(":")[0]);
              for (let hour = startHour; hour < endHour; hour++) {
                newOccupiedSlots[`${day}-${hour}`] = {
                  course: course["Course Code"],
                  name: course["Course Name"],
                  activity: activity.Activity,
                  time: `${activity["Begin time"]} - ${activity["End time"]}`,
                  room: activity.Room,
                };
              }
            });
          }
        });
      });
      setOccupiedSlots(newOccupiedSlots);
    }
  }, [selectedOccurrence, courses]);

  const isSlotOccupied = (day, hour) => {
    return occupiedSlots[`${day}-${hour}`];
  };

  const renderCell = (day, hour) => {
    const slot = isSlotOccupied(day, hour);
    if (slot) {
      return (
        <div className="bg-blue-200 p-1 text-xs">
          <div>{slot.course}</div>
          <div>{slot.name}</div>
          <div>{slot.activity}</div>
          <div>{slot.time}</div>
          <div>{slot.room}</div>
        </div>
      );
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
