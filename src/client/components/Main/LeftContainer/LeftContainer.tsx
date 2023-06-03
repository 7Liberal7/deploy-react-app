import React from "react";
import { Title } from "./Title";
import { List } from "./List";
import { AddTask } from "./AddTask";
import { TasksList } from "./TasksList";

export const LeftContainer = () => {
  return (
    <>
      <div className="LeftContainer">
        <Title />
        <List />
        <AddTask />
        <TasksList />
      </div>
    </>
  )
}

export default LeftContainer