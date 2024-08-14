export interface ScrollButtonProps {
  isScrolled: boolean;
  isActive: boolean;
  targetSection?: HTMLElement | null;
  triggerSection?: HTMLElement | null;
}