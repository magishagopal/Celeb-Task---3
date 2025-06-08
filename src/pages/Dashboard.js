import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
  { name: 'Apr', uv: 200 }
];

const Dashboard = () => (
  <Paper sx={{ margin: 2, padding: 2 }}>
    <Typography variant="h5" gutterBottom>Sales Overview</Typography>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#1976d2" />
      </LineChart>
    </ResponsiveContainer>
  </Paper>
);

export default Dashboard;
