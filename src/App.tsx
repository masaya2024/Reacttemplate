import type { ComponentType } from 'react'

type PageModule = {
  default: ComponentType
}

const PAGES = import.meta.glob('./pages/*.tsx', {
  eager: true,
}) as Record<string, PageModule>

const DEFAULT_PAGE_PATH = './pages/index.tsx'

function resolveDefaultPage(): ComponentType {
  if (PAGES[DEFAULT_PAGE_PATH]) {
    return PAGES[DEFAULT_PAGE_PATH].default
  }

  return () => (
    <div className="flex min-h-screen items-center justify-center bg-rose-950 text-rose-100">
      <p>
        Missing default page. Create <code>src/pages/index.tsx</code> to get started.
      </p>
    </div>
  )
}

function App() {
  const DefaultPage = resolveDefaultPage()
  return <DefaultPage />
}

export default App
