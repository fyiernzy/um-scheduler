import { Activity } from "./interfaces";

export const ActivityDetails = ({ activity }: { activity: Activity }) => {
  return (
    <div className="mt-2 pt-2 border-t border-gray-400">
      <p className="font-semibold">{activity.Activity}</p>
      <p>
        {activity["Begin time"]} - {activity["End time"]}
      </p>
      <p className="text-sm text-gray-600">{activity.Day}</p>
      <p>{activity.Room}</p>
    </div>
  );
};
