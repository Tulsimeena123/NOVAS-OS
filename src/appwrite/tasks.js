import { ID, Query } from "./config";
import { tablesDB } from "./config";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

// ⚠️ Isko baad me tumhare Tasks table ID se replace karenge
const TABLE_ID = import.meta.env.VITE_APPWRITE_TASK_TABLE_ID;

// Create Task
export const createTask = async (title, userId) => {
  return await tablesDB.createRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId: ID.unique(),
    data: {
      title,
      completed: 0,
      userId,
    },
  });
};

// Get Tasks
export const getTasks = async (userId) => {
  return await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    queries: [
      Query.equal("userId", userId),
    ],
  });
};

// Delete Task
export const deleteTask = async (rowId) => {
  return await tablesDB.deleteRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId,
  });
};

// Update Task Status
export const updateTask = async (rowId, completed) => {
  return await tablesDB.updateRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId,
    data: {
      completed,
    },
  });
};