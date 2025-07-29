import { Metadata } from 'next'
import { RegisterForm } from '@/components/register-form'

export const metadata: Metadata = {
  title: 'Registro - BodyLink',
  description: 'Crea tu cuenta de BodyLink para comenzar a gestionar pacientes',
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
        <RegisterForm />

    </div>
  )
}