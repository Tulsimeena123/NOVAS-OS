import { ID, Query } from "./config";
import { tablesDB } from "./config";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

// Create Note
export const createNote = async (title, content, userId) => {
  return await tablesDB.createRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId: ID.unique(),
    data: {
      title,
      content,
      userId,
    },
  });
};

// Get Notes
export const getNotes = async (userId) => {
  return await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    queries: [
      Query.equal("userId", userId),
    ],
  });
};

// Delete Note
export const deleteNote = async (rowId) => {
  return await tablesDB.deleteRow({
    databaseId: DATABASE_ID,
    tableId: TABLE_ID,
    rowId,
  });
};