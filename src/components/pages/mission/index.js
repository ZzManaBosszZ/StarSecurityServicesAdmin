import { Link } from "react-router-dom";
import Layout from "../../layouts";
import ReactPaginate from "react-paginate";
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
    { id: 'task-1', content: 'Task 1' },
    { id: 'task-2', content: 'Task 2' },
    { id: 'task-3', content: 'Task 3' }
];

const initialColumns = {
    'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: initialTasks.map(task => task.id)
    },
    'column-2': {
        id: 'column-2',
        title: 'In Progress',
        taskIds: []
    },
    'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: []
    }
};

function MissionList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [columns, setColumns] = useState(initialColumns);
    const [newTaskContent, setNewTaskContent] = useState('');
  
    const addTask = () => {
      if (newTaskContent.trim() !== '') {
        const newTask = {
          id: `task-${tasks.length + 1}`,
          content: newTaskContent
        };
        setTasks([...tasks, newTask]);
        setColumns({
          ...columns,
          'column-1': {
            ...columns['column-1'],
            taskIds: [...columns['column-1'].taskIds, newTask.id]
          }
        });
        setNewTaskContent('');
      }
    };
  
    const deleteTask = taskId => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      const updatedColumns = Object.keys(columns).reduce((acc, columnId) => {
        const column = columns[columnId];
        acc[columnId] = {
          ...column,
          taskIds: column.taskIds.filter(id => id !== taskId)
        };
        return acc;
      }, {});
      setTasks(updatedTasks);
      setColumns(updatedColumns);
    };
  
    const handleNewTaskChange = e => {
      setNewTaskContent(e.target.value);
    };
  
    const onDragEnd = result => {
      // Code xử lý kéo và thả như trước
    };
    return (
        <Layout>
            <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        {Object.values(columns).map(column => (
          <div key={column.id} className="column">
            <h3>{column.title}</h3>
            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                    padding: 4,
                    minHeight: 500
                  }}
                >
                  {column.taskIds.map((taskId, index) => (
                    <Draggable key={taskId} draggableId={taskId} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task"
                          style={{
                            ...provided.draggableProps.style,
                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86'
                          }}
                        >
                          {tasks.find(task => task.id === taskId).content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
        </Layout>
    );
}

export default MissionList;

