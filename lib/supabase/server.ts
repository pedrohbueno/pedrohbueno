import 'server-only';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';
import { env } from '@/lib/env';
 
export const supabase = createClient<Database>(env.supabaseUrl, env.supabaseKey, {
  auth: { persistSession: false },
});
