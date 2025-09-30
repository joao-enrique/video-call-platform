import StreamClientProvider from "@/components/Providers/StreamClientProvider"
import { ClerkProvider } from "@clerk/nextjs"

function Layout({children}: {children: React.ReactNode}) {
  return (
    <StreamClientProvider>{children}</StreamClientProvider>
  )
}

export default Layout
