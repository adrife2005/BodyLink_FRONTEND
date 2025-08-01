import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          asChild
        >
          <a href="/">
            <X className="h-4 w-4" />
            <span className="sr-only">Volver al inicio</span>
          </a>
        </Button>
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Crear Cuenta</h1>
                <p className="text-balance text-muted-foreground">
                  Únete a BodyLink y comienza a gestionar tus pacientes
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Juan"
                    className="placeholder-input-placeholder"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Pérez"
                    className="placeholder-input-placeholder"
                    required
                  />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="placeholder-input-placeholder"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  className="placeholder-input-placeholder"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repite tu contraseña"
                  className="placeholder-input-placeholder"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="specialty">Especialidad</Label>
                <Select>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Selecciona tu especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nutricion-clinica">Nutrición clínica</SelectItem>
                    <SelectItem value="nutricion-deportiva">Nutrición deportiva</SelectItem>
                    <SelectItem value="nutricion-pediatrica">Nutrición pediátrica</SelectItem>
                    <SelectItem value="nutricion-geriatrica">Nutrición geriátrica</SelectItem>
                    <SelectItem value="nutricion-oncologica">Nutrición oncológica</SelectItem>
                    <SelectItem value="nutricion-renal">Nutrición renal</SelectItem>
                    <SelectItem value="nutricion-trastornos-alimentarios">Nutrición en trastornos alimentarios</SelectItem>
                    <SelectItem value="nutricion-vegetariana-vegana">Nutrición vegetariana/vegana</SelectItem>
                    <SelectItem value="nutricion-materno-infantil">Nutrición materno-infantil</SelectItem>
                    <SelectItem value="nutricion-comunitaria">Nutrición comunitaria</SelectItem>
                    <SelectItem value="nutricion-salud-publica">Nutrición en salud pública</SelectItem>
                    <SelectItem value="nutricion-metabolica">Nutrición metabólica</SelectItem>
                    <SelectItem value="nutricion-digestiva">Nutrición digestiva</SelectItem>
                    <SelectItem value="nutricion-endocrina">Nutrición endocrina (diabetes, tiroides)</SelectItem>
                    <SelectItem value="nutricion-bariatrica">Nutrición bariátrica</SelectItem>
                    <SelectItem value="nutricion-inmunologica">Nutrición inmunológica</SelectItem>
                    <SelectItem value="nutricion-hospitalaria">Nutrición hospitalaria</SelectItem>
                    <SelectItem value="nutricion-empresarial">Nutrición empresarial/laboral</SelectItem>
                    <SelectItem value="nutricion-funcional">Nutrición funcional</SelectItem>
                    <SelectItem value="nutricion-estetica">Nutrición estética</SelectItem>
                    <SelectItem value="nutricion-forense">Nutrición forense</SelectItem>
                    <SelectItem value="nutricion-ambiental">Nutrición ambiental/sostenible</SelectItem>
                    <SelectItem value="nutricion-genetica">Nutrición genética (nutrigenómica y nutrigenética)</SelectItem>
                    <SelectItem value="nutricion-neurologica">Nutrición neurológica</SelectItem>
                    <SelectItem value="nutricion-cuidados-intensivos">Nutrición en cuidados intensivos</SelectItem>
                    <SelectItem value="nutricion-deportiva-alto-rendimiento">Nutrición deportiva de alto rendimiento</SelectItem>
                    <SelectItem value="nutricion-enfermedades-raras">Nutrición para enfermedades raras</SelectItem>
                    <SelectItem value="nutricion-adicciones">Nutrición en adicciones</SelectItem>
                    <SelectItem value="nutricion-salud-mental">Nutrición en salud mental</SelectItem>
                    <SelectItem value="nutricion-integrativa">Nutrición integrativa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="terms" className="text-sm text-foreground">
                  Acepto los{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-primary">
                    términos de servicio
                  </a>{" "}
                  y{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-primary">
                    política de privacidad
                  </a>
                </Label>
              </div>
              
              <Button type="submit" className="w-full">
                Crear Cuenta
              </Button>
              
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                  O regístrate con
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Registrarse con Apple</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Registrarse con Google</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Registrarse con Meta</span>
                </Button>
              </div>
              
              <div className="text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <a href="/login" className="underline underline-offset-4 hover:text-primary">
                  Inicia sesión
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/login_image.png"
              alt="Registro BodyLink"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Al crear una cuenta, estarás aceptando nuestros{" "}
        <a href="#">Términos de servicio</a> y{" "}
        <a href="#">Política de privacidad</a>.
      </div>
    </div>
  )
}