export type PatientGoal = 
  | 'perdida-peso'
  | 'ganancia-muscular'
  | 'mejora-salud'
  | 'control-diabetes'
  | 'aumento-energia'
  | 'dieta-equilibrada'
  | 'reduccion-estres'
  | 'mejora-digestiva'
  | 'entrenamiento-deportivo'
  | 'control-peso'

export interface Patient {
  id: number
  name: string
  email: string
  phone: string
  lastConsult: string
  objective: PatientGoal
}

export interface TableColumn<T> {
  key: keyof T | string
  label: string
  width?: string
  render?: (value: any, item: T) => React.ReactNode
}

export interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  onDragEnd?: (items: T[]) => void
  searchableFields?: (keyof T)[]
  className?: string
  draggable?: boolean
}