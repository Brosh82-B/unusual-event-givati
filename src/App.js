import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import MainForm from "./components/MainForm/MainForm";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  const formConfig = [
    { name: "fullName", label: "שם מלא", type: "text", defaultValue: "" },
    { name: "rank", label: "דרגה", type: "text", defaultValue: "" },
    { name: "militaryId", label: "מ.א", type: "text", defaultValue: "" },
    { name: "idNumber", label: "ת.ז", type: "text", defaultValue: "" },
    { name: "gdod", label: "גדוד", type: "text", defaultValue: "" },
    { name: "ploga", label: "פלוגה", type: "text", defaultValue: "" },
    { name: "team", label: "צוות", type: "text", defaultValue: "" },
    {
      name: "eventDescription",
      label: "תאר את האירוע החריג",
      type: "textarea",
      defaultValue: "",
    },
    {
      name: "eventLocation",
      label: "מקום האירוע",
      type: "text",
      defaultValue: "",
    },
    {
      name: "eventDate",
      label: "תאריך האירוע",
      type: "date",
      defaultValue: "",
    },
    { name: "eventTime", label: "שעת האירוע", type: "time", defaultValue: "" },
    {
      name: "injuryOccurred",
      label: "האם נפצעת במסגרת האירוע החריג",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "injuryDetails",
      label: "אם סימנת כן, תאר את פציעתך וכיצד טופלת",
      type: "textarea",
      defaultValue: " ",
    },
    {
      name: "inDuty",
      label: "האם האירוע התרחש במסגרת התפקיד",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "commanderName",
      label: "אם סימנת כן, ציין שם מלא של מי שפיקד עליך במהלך האירוע",
      type: "text",
      defaultValue: " ",
    },
    {
      name: "othersInvolved",
      label: "האם היו מעורבים נוספים לאירוע",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "involvedNames",
      label: "אם סימנת כן, ציין את שמם המלא",
      type: "textarea",
      defaultValue: " ",
    },
    {
      name: "reportedToCommand",
      label: "האם האירוע דווח לגורמי פיקוד",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "commandNames",
      label: "אם סימנת כן, ציין את שמם המלא של גורמי הפיקוד",
      type: "textarea",
      defaultValue: " ",
    },
    {
      name: "reportedToCivilians",
      label: "האם האירוע דווח לגורמים אזרחיים",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "civilianAuthority",
      label: "אם סימנת כן, יש לפרט את שם הגורם",
      type: "textarea",
      defaultValue: " ",
    },
    {
      name: "witnesses",
      label: "האם היו עדים לאירוע",
      type: "select",
      options: ["כן", "לא"],
      defaultValue: "לא",
    },
    {
      name: "witnessNames",
      label: "אם סימנת כן, ציין את שמם המלא",
      type: "textarea",
      defaultValue: " ",
    },
  ];
  return (
    <div className="App">
      <AppHeader />
      <div className="main">
        <MainForm
          formConfig={formConfig}
          scriptUrl="https://script.google.com/macros/s/AKfycbyfoxRpPSP1zQL8hO2kSl3kHSFLdIf-TB42HISNzG1EmKNXUeBS1-RWruiqZ6RANORgUQ/exec"
        />
      </div>
      <AppFooter />
      <NotificationContainer />
    </div>
  );
}

export default App;
