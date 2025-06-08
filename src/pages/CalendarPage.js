import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Paper, Typography } from "@mui/material";

const CalendarPage = () => (
  <Paper sx={{ margin: 2, padding: 2 }}>
    <Typography variant="h5" gutterBottom>Calendar</Typography>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[{ title: "Meeting", date: "2025-06-10" }]}
    />
  </Paper>
);

export default CalendarPage;
