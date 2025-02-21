import { useEffect, useState, useCallback, useMemo } from "react";
import { getTasks, deleteTask } from "../api/tasks";
import { Task } from "../types/task";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = useCallback(async () => {
    const data = await getTasks();
    setTasks(data);
  }, []);

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  const renderedTasks = useMemo(
    () =>
      tasks.map((task) => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
            <Typography variant="caption" color="primary">
              {task.status}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(task.id)}>
                Удалить
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )),
    [tasks, handleDelete]
  );

  return <div>{renderedTasks}</div>;
};

export default TaskList;
