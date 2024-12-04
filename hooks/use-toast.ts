'use client';

import { toast as sonnerToast } from 'sonner';

type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
};

export function toast({ title, description, duration = 3000 }: ToastProps) {
  return sonnerToast(title, {
    description,
    duration,
  });
}

export function useToast() {
  return {
    toast,
  };
}