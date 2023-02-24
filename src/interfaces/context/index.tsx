export interface IProvider {
  children: React.ReactNode
}

export interface IContext {
  showAddAnnouncementModal: boolean
  setShowAddAnnouncementModal: React.Dispatch<React.SetStateAction<boolean>>
}