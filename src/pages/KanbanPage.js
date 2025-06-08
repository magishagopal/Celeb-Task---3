import Kanban from "../components/Kanban";
import { Paper, Typography } from "@mui/material";

const KanbanPage = () => (
  <Paper sx={{ margin: 2, padding: 2 }}>
    <Typography variant="h5" gutterBottom>Kanban Board</Typography>
    <Kanban />
  </Paper>
);

export default KanbanPage;
