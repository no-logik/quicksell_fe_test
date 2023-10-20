import Backlog from "../assets/options.svg";
import Todo from "../assets/todo.svg";
import InProgress from "../assets/in_progress.svg";
import Done from "../assets/done.svg";
import Cancelled from "../assets/cancelled.svg";

import Urgent from "../assets/urgent.svg";
import High from "../assets/high_priority.svg";
import Medium from "../assets/medium_priority.svg";
import Low from "../assets/low_priority.svg";
import NoPriority from "../assets/options.svg";

const status = [
  {
    trayIcon: Backlog,
    trayGroup: "Backlog",
  },
  {
    trayIcon: Todo,
    trayGroup: "Todo",
  },
  {
    trayIcon: InProgress,
    trayGroup: "In progress",
  },
  {
    trayIcon: Done,
    trayGroup: "Done",
  },
  {
    trayIcon: Cancelled,
    trayGroup: "Cancelled",
  },
];

const priority = [
  { trayIcon: NoPriority, trayGroup: "No priority", priority: 0 },
  {
    trayIcon: Low,
    trayGroup: "Low",
    priority: 1,
  },
  {
    trayIcon: Medium,
    trayGroup: "Medium",
    priority: 2,
  },
  {
    trayIcon: High,
    trayGroup: "High",
    priority: 3,
  },
  {
    trayIcon: Urgent,
    trayGroup: "Urgent",
    priority: 4,
  },
];

export const groups = () => [status, "user", priority];
