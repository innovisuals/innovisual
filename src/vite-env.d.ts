
/// <reference types="vite/client" />

// Add custom element declaration for model-viewer
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src: string;
      alt: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      'shadow-intensity'?: string;
      'touch-action'?: string;
      style?: React.CSSProperties;
      loading?: 'auto' | 'eager' | 'lazy';
      'disable-zoom'?: boolean;
      ar?: boolean;
      'ar-modes'?: string;
      poster?: string;
      exposure?: string;
      'environment-image'?: string;
      'camera-orbit'?: string;
      'camera-target'?: string;
    }, HTMLElement>;
  }
}
