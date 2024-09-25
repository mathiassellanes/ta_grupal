export type CardType = {
  id: string,
  title: string,
  description: string,
  assignedTo: string,
  priority: string,
  status: 'Backlog' | 'To Do' | 'In Progress' | 'Blocked' | 'Done',
  endDate: string,
  index: number,
}
