"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PatientRegistrationForm } from "@/components/patient-registration-form"
import { useState } from "react"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              BodyLink
            </h1>
            <p className="text-xl text-muted-foreground">
              Sistema de gestión para profesionales de la salud
            </p>
          </div>

          {/* Color Testing Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Prueba de Colores del Sistema
              </h2>
              <p className="text-muted-foreground">
                Verificación de todos los colores CSS definidos en globals.css
              </p>
            </div>

            {/* Base Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Colores Base</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-background border rounded-lg flex items-center justify-center">
                    <span className="text-foreground font-medium">Background</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-foreground rounded-lg flex items-center justify-center">
                    <span className="text-background font-medium">Foreground</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--foreground</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg flex items-center justify-center">
                    <span className="text-card-foreground font-medium">Card</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--card</p>
                </div>
              </CardContent>
            </Card>

            {/* Primary & Secondary Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Colores Primarios y Secundarios</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-medium">Primary</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--primary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground font-medium">Secondary</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--secondary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Muted</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--muted</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-medium">Accent</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--accent</p>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Elements */}
            <Card>
              <CardHeader>
                <CardTitle>Elementos Interactivos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-16 bg-destructive rounded-lg flex items-center justify-center">
                      <span className="text-destructive-foreground font-medium">Destructive</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">--destructive</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 border-2 border-border rounded-lg flex items-center justify-center">
                      <span className="text-foreground font-medium">Border</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">--border</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 bg-input rounded-lg flex items-center justify-center">
                      <span className="text-foreground font-medium">Input</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">--input</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Componentes de Ejemplo:</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button>Botón Primario</Button>
                    <Button variant="secondary">Botón Secundario</Button>
                    <Button variant="destructive">Botón Destructivo</Button>
                    <Button variant="outline">Botón Outline</Button>
                    <Button variant="ghost">Botón Ghost</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Badge Default</Badge>
                    <Badge variant="secondary">Badge Secondary</Badge>
                    <Badge variant="destructive">Badge Destructive</Badge>
                    <Badge variant="outline">Badge Outline</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chart Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Colores de Gráficos</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--chart-1))'}}>
                    <span className="text-white font-medium text-sm">Chart 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--chart-1</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--chart-2))'}}>
                    <span className="text-white font-medium text-sm">Chart 2</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--chart-2</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--chart-3))'}}>
                    <span className="text-white font-medium text-sm">Chart 3</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--chart-3</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--chart-4))'}}>
                    <span className="text-white font-medium text-sm">Chart 4</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--chart-4</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--chart-5))'}}>
                    <span className="text-white font-medium text-sm">Chart 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--chart-5</p>
                </div>
              </CardContent>
            </Card>

            {/* Financial Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Colores Financieros</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--income))'}}>
                    <span className="text-white font-medium">Income</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--income</p>
                  <p className="text-income text-center font-semibold">Texto con color income</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--expense))'}}>
                    <span className="text-white font-medium">Expense</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--expense</p>
                  <p className="text-expense text-center font-semibold">Texto con color expense</p>
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Colores del Sidebar</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--sidebar-background))', border: '1px solid hsl(var(--sidebar-border))'}}>
                    <span style={{color: 'hsl(var(--sidebar-foreground))'}} className="font-medium">Sidebar BG</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--sidebar-background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--sidebar-primary))'}}>
                    <span style={{color: 'hsl(var(--sidebar-primary-foreground))'}} className="font-medium">Sidebar Primary</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--sidebar-primary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: 'hsl(var(--sidebar-accent))'}}>
                    <span style={{color: 'hsl(var(--sidebar-accent-foreground))'}} className="font-medium">Sidebar Accent</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">--sidebar-accent</p>
                </div>
              </CardContent>
            </Card>

            {/* Theme Toggle Test */}
            <Card>
              <CardHeader>
                <CardTitle>Prueba de Tema</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Usa el botón de cambio de tema en la navbar para probar los colores en modo oscuro y claro.
                </p>
                <div className="p-4 bg-popover border border-border rounded-lg">
                  <p className="text-popover-foreground">
                    Este es un ejemplo de popover con sus colores específicos.
                  </p>
                </div>
              </CardContent>
            </Card>

             {/* Formulario de Registro de Paciente */}
             <Card>
               <CardHeader>
                 <CardTitle>Formulario de Registro de Paciente</CardTitle>
               </CardHeader>
               <CardContent className="text-center space-y-4">
                 <p className="text-muted-foreground">
                   Ejemplo del formulario de registro de paciente con todos los campos y estilos.
                 </p>
                 <Button 
                   onClick={() => setIsFormOpen(true)}
                   className="bg-primary text-primary-foreground hover:bg-primary/90"
                 >
                   Abrir Formulario de Registro
                 </Button>
               </CardContent>
             </Card>
           </div>
        </div>
      </main>

      {/* Formulario Modal */}
      <PatientRegistrationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  )
}