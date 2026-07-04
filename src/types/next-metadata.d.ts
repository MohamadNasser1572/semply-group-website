declare module "next/dist/lib/metadata/types/metadata-interface.js" {
    export type ResolvingMetadata = unknown;
    export type ResolvingViewport = unknown;
    export type Metadata = unknown;
    export type Viewport = unknown;
}

declare module "next/types.js" {
    export type ResolvingMetadata = unknown;
    export type ResolvingViewport = unknown;
}

declare module "next" {
    export type Metadata = unknown;
}

declare module "next/font/google" {
    export function Cormorant_Garamond(options: { subsets?: string[]; weight?: string[]; variable?: string }): { variable: string };
    export function Inter(options: { subsets?: string[]; variable?: string }): { variable: string };
}