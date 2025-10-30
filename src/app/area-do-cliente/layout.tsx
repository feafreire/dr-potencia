import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Área do Cliente - +Potente',
  description: 'Acesse conteúdos exclusivos sobre saúde masculina, performance e bem-estar.',
}

export default function AreaDoClienteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}