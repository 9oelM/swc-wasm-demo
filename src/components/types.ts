export type SwcWasm = {
  parseSync(s: string, opts: any): any;
  printSync(s: any, opts: any): any;
  transformSync(s: string, opts: any): { readonly code: string; };
}