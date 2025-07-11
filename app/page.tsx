import Navbar from "@/components/navbar"

export default function Home() {
  return (
        <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Inicio
            </h1>
            <p className="text-lg text-muted-foreground">
              Próximamente...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Estamos trabajando en el Inicio
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}