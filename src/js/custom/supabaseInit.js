import { createClient } from '@supabase/supabase-js';

const supabaseUrl = window.__SUPABASE__.url;
const supabaseKey = window.__SUPABASE__.anonKey;

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('✅ Supabase client initialized');
