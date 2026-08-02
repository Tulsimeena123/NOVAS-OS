import { ID } from "appwrite";
import { account } from "./config";

// Signup
export const createAccount = async (email, password, name) => {
  try {
    return await account.create(
      ID.unique(),
      email,
      password,
      name
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Login
export const loginAccount = async (email, password) => {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Logout
export const logoutAccount = async () => {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Current User
export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};