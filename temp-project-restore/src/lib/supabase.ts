"use client"

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para operações administrativas (server-side)
export const createAdminClient = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Tipos para as tabelas
export interface Profile {
  id: string
  user_id: string
  name: string
  email: string
  phone?: string
  birth_date?: string
  created_at: string
  updated_at: string
}

export interface QuizResponse {
  id: string
  user_id?: string
  session_id?: string
  answers: Record<string, any>
  score: number
  created_at: string
}