import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Renier Quer - Arqueólogo Visual',
  description: 'Contemporary Cuban artist specializing in visual archaeology of revolutionary myths. Through systematic deconstruction of cinema and storyboard analysis, I excavate the hidden narratives beneath decades of visual propaganda.',
  keywords: 'Renier Quer, Cuban artist, visual archaeology, contemporary art, storyboard analysis, cinema deconstruction, revolutionary myths',
  authors: [{ name: 'Renier Quer' }],
  openGraph: {
    title: 'Renier Quer - Arqueólogo Visual',
    description: 'Contemporary Cuban artist specializing in visual archaeology of revolutionary myths.',
    url: 'https://renierquer.com',
    siteName: 'Renier Quer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://renierquer.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}