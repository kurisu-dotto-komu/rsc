import Border from "#/components/border";
import Code from "#/components/code";
import Highlight from "#/components/highlight";
import Info from "#/components/info";
import Readable from "#/components/readable";
import SignOff from "#/components/signOff";

import { ContextCounterProvider } from "./contextCounterProvider";
import ContextServer from "./contextServer";

export default function ContextPage() {
  return (
    <>
      <Readable>
        <Info>
          Client Context can be shared as usual and is accessible by components further down the
          component tree.
        </Info>
        <Border server>
          <ContextCounterProvider>
            <ContextServer />
          </ContextCounterProvider>
        </Border>

        <p>
          A common use case is a <Highlight>top level theme provider</Highlight> client component
          that wraps the entire app. Because the app is being passed &quot;through&quot; from the
          root server component, children are not within a client boundary, but subsequently
          imported client components <i>can</i> access the theme context.
        </p>
      </Readable>
      <div className="grid gap-4 md:grid-cols-2">
        <Code
          tabs={["layout.tsx"]}
          code={`
import ThemeProvider from './theme-provider'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
`}
        />
        <Code
          tabs={["themeProvider.tsx"]}
          code={`
'use client'; // opt-out of RSC
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}
`}
        />
      </div>
      <Readable>
        <p>
          This may change and patterns are still emerging about how to share context between server
          and client. For example, how do we render the user&apos;s preferred theme during the
          initial page request?
        </p>
      </Readable>
    </>
  );
}
