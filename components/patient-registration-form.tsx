"use client"

import { useState } from "react"
import { X, User, Calendar, MapPin, Briefcase, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

interface PatientRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function PatientRegistrationForm({ isOpen, onClose }: PatientRegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    country: "",
    occupation: "",
    email: "",
    phone: "",
    acceptNotifications: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Datos del formulario:", formData)
    // Aquí iría la lógica para enviar los datos
    onClose()
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-card border-border">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Registra un paciente!</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Datos Personales */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Datos Personales</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre completo */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">Nombre completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>

                {/* Fecha de nacimiento */}
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="text-foreground">Fecha de nacimiento</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="birthDate"
                      type="text"
                      placeholder="__/__/____"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>

                {/* Género */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-foreground">Género</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger className="pl-10 bg-input border-border text-foreground">
                        <SelectValue placeholder="Selecciona el género" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="femenino">Femenino</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* País de origen */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground">País de origen</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="country"
                      type="text"
                      placeholder="Ej: Monterrey, México"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>

                {/* Ocupación */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="occupation" className="text-foreground">Ocupación</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="occupation"
                      type="text"
                      placeholder="Ej: Diseñador web"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange("occupation", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Datos de Contacto */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Datos de Contacto</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ej: juanperez@gmail.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>

                {/* Teléfono Móvil */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Teléfono Móvil</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ej: +52 55 1234-5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 bg-input border-border text-foreground placeholder-input-placeholder"
                    />
                  </div>
                </div>
              </div>

              {/* Checkbox de notificaciones */}
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="notifications"
                  checked={formData.acceptNotifications}
                  onCheckedChange={(checked) => handleInputChange("acceptNotifications", checked as boolean)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="notifications" className="text-sm text-foreground">
                  Acepta recibir notificaciones por correo
                </Label>
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-border text-foreground hover:bg-accent"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Registrar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}