import Navbar from "@/components/navbar"

export default function NovedadesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-muted-foreground">Novedades</h1>
          <p className="text-xl text-muted-foreground">Próximamente...</p>
        </div>
      </main>
    </div>
  )
}

