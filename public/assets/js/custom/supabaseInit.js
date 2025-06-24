(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@supabase/supabase-js')) :
  typeof define === 'function' && define.amd ? define(['exports', '@supabase/supabase-js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.supabaseInit = {}, global.supabaseJs));
})(this, (function (exports, supabaseJs) { 'use strict';

  const supabaseUrl = window.__SUPABASE__?.url;
  const supabaseKey = window.__SUPABASE__?.anonKey;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Variables de Supabase no definidas');
  }

  const supabase = supabaseJs.createClient(supabaseUrl, supabaseKey);
  console.log('✅ Supabase client initialized');

  exports.supabase = supabase;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=supabaseInit.js.map
