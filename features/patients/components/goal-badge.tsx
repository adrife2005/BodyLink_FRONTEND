import { StatusBadge, BadgeConfig } from "@/components/ui/status-badge"
import { PatientGoal } from '../types'

interface GoalBadgeProps {
  goal: PatientGoal
  className?: string
}

const goalConfig: Record<string, BadgeConfig> = {
  'perdida-peso': {
    label: 'Pérdida de peso',
    className: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800'
  },
  'ganancia-muscular': {
    label: 'Ganancia muscular',
    className: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-800'
  },
  'mejora-salud': {
    label: 'Mejora de salud',
    className: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-950/50 dark:text-green-400 dark:border-green-800'
  },
  'control-diabetes': {
    label: 'Control de diabetes',
    className: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-800'
  },
  'aumento-energia': {
    label: 'Aumento de energía',
    className: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-800'
  },
  'dieta-equilibrada': {
    label: 'Dieta equilibrada',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-800'
  },
  'reduccion-estres': {
    label: 'Reducción de estrés',
    className: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-400 dark:border-indigo-800'
  },
  'mejora-digestiva': {
    label: 'Mejora digestiva',
    className: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-950/50 dark:text-orange-400 dark:border-orange-800'
  },
  'entrenamiento-deportivo': {
    label: 'Entrenamiento deportivo',
    className: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 dark:bg-cyan-950/50 dark:text-cyan-400 dark:border-cyan-800'
  },
  'control-peso': {
    label: 'Control de peso',
    className: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 dark:bg-pink-950/50 dark:text-pink-400 dark:border-pink-800'
  }
}

const fallbackConfig: BadgeConfig = {
  label: 'Objetivo general',
  className: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-gray-950/50 dark:text-gray-400 dark:border-gray-800'
}

export function GoalBadge({ goal, className }: GoalBadgeProps) {
  return (
    <StatusBadge 
      value={goal}
      config={goalConfig}
      fallbackConfig={fallbackConfig}
      className={className}
    />
  )
}