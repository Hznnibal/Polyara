'use client';

import { cn } from '@/lib/utils';
import {
  FileText,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Tableau de bord', href: '/' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: ShoppingCart, label: 'Commandes', href: '/commandes' },
  { icon: Package, label: 'Produits', href: '/produits' },
  { icon: Wallet, label: 'Finances', href: '/finances' },
  { icon: FileText, label: 'Factures', href: '/factures' },
  { icon: Settings, label: 'Paramètres', href: '/parametres' },
];

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'border-r bg-card transition-all duration-300 overflow-hidden',
        isOpen ? 'w-64' : 'w-0'
      )}
    >
      <div className={cn('flex h-16 items-center border-b px-4', !isOpen && 'hidden')}>
        <h2 className="text-lg font-semibold">Polyara</h2>
      </div>
      <nav className={cn('flex flex-col gap-2 p-4', !isOpen && 'hidden')}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                pathname === item.href
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}