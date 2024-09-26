import type { NamespacedPixiElements } from './typedefs/NamespacedPixiElements';
import type { PixiElements } from './typedefs/PixiElements';
declare global {
    namespace JSX {
        interface IntrinsicElements extends PixiElements, NamespacedPixiElements {
        }
    }
}
