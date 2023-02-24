import { createContext, useState } from "react";
import { IContext, IProvider } from "../interfaces/context";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  const [showAddAnnouncementModal, setShowAddAnnouncementModal] =
    useState<boolean>(false);

  return (
    <Context.Provider
      value={{ showAddAnnouncementModal, setShowAddAnnouncementModal }}
    >
      {children}
    </Context.Provider>
  );
};
