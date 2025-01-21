import { ReactNode } from 'react'

declare module 'react' {
  export type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined }
}
