"use client";
import LoginPage from "@/components/login";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AppContextModel = {
  userId?: string;
  setUser: (userId: string) => void;
};

const initialAppContext: AppContextModel = {
  userId: undefined,
  setUser: () => {},
};

const AppContext = createContext(initialAppContext);

export const useAppContext = () => useContext(AppContext);

export type appContextProviderProps = {
  initialContext?: AppContextModel;
} & PropsWithChildren;

export const AppContextProvider = ({ initialContext, children }: appContextProviderProps) => {
  const [contextModel, setContextModel] = useState({ ...initialContext });

  function setUser(userId: string) {
    setContextModel((prev) => ({ ...prev, userId }));
  }

  function renderChildre() {
    if (contextModel.userId) {
      return children;
    }
    return <LoginPage />;
  }

  return <AppContext value={{ ...contextModel, setUser }}>{renderChildre()}</AppContext>;
};
