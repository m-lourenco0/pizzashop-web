import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Oooops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você entrontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 underline dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
