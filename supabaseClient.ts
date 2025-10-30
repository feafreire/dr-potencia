import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para as respostas do quiz
export interface QuizResponse {
  id?: string
  user_id?: string | null
  session_id: string
  answers: Record<string, any>
  score?: number | null
  created_at?: string
}