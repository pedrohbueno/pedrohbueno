import {
  Bot, Database, Folder, Globe, Smartphone, type LucideIcon,
} from 'lucide-react';
 
const ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  globe: Globe,
  bot: Bot,
  database: Database,
  folder: Folder,
};
 
export const getCategoryIcon = (name: string): LucideIcon => ICONS[name] ?? Folder;
