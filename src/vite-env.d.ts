/// <reference types="vite/client" />
// src/global.d.ts or src/types/aos.d.ts
declare module "aos" {
  const AOS: any // Use any type if you want to disable type checking
  export default AOS
}
