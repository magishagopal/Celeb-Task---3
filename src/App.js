import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTheme } from "./theme";
import Dashboard from "./pages/Dashboard";
import TablePage from "./pages/TablePage";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Navbar setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
