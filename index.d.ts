/// <reference types="node" />

export = cattryP

declare const cattryP: CattryP
declare const cattry: Cattry

interface CattryP {
  <T, Error>(p: Promise<T>): Promise<[Error, T]>
}

interface Cattry {
  <T, Error>(f: Function): [Error, T]
}
