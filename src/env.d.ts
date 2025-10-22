/// <reference types="vite/client" />

/**
 * Environment Variables Type Definitions
 *
 * Add your environment variable types here.
 * All environment variables must be prefixed with VITE_
 *
 * Example:
 * interface ImportMetaEnv {
 *   readonly VITE_API_URL: string;
 *   readonly VITE_API_KEY: string;
 * }
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv {
  // Add your custom environment variables here
  // Example: readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
