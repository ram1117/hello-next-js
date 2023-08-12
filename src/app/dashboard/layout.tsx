export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="border-2 border-blue-500 h-screen m-5 flex justify-center items-center">
    <h2 className="text-3xl">Dashboard</h2>
    {children}
    </section>
}