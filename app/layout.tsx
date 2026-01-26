import './globals.css'

export const metadata = {
  title: 'Mannaan Akhtar | Portfolio',
  description: 'Operations, Analytics & Web Development Professional based in Dubai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}