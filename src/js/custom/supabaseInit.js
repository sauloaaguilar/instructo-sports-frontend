import { createClient } from '@supabase/supabase-js';

const supabaseUrl = window.__SUPABASE__?.url;
const supabaseKey = window.__SUPABASE__?.anonKey;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Variables de Supabase no definidas');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('✅ Supabase client initialized');
