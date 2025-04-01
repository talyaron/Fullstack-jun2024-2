export interface Task {
  _id: string;
  text: string;
  isCompleted: boolean;
  isEditing?: boolean;
}
