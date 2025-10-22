declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(array: Float32Array, options?: { radius?: number }): Float32Array;
  export function inBox(array: Float32Array, options?: { size?: number }): Float32Array;
  export function inCircle(array: Float32Array, options?: { radius?: number }): Float32Array;
} 