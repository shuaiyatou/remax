import factory from './factory';

export interface CanvasProps {
  id?: string;
  style?: string;
  class?: string;
  width?: string;
  height?: string;
  disableScroll?: boolean;
  onTap?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onLongTap?: (e: any) => void;
}
const Canvas = factory<CanvasProps>('canvas');

export default Canvas;