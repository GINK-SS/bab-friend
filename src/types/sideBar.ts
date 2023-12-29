export type CommonPropsType = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SideBarPropsType = CommonPropsType & {
  sidebarOpen: boolean;
};
