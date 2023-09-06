export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          cooking_skill_level: string
          created_at: string
          diet: string | null
          email: string
          favorite_cuisines: string | null
          first_name: string
          food_allergies: string | null
          is_soft_deleted: boolean
          last_name: string
          phone_number: string | null
          user_id: string
        }
        Insert: {
          cooking_skill_level: string
          created_at?: string
          diet?: string | null
          email: string
          favorite_cuisines?: string | null
          first_name: string
          food_allergies?: string | null
          is_soft_deleted?: boolean
          last_name: string
          phone_number?: string | null
          user_id: string
        }
        Update: {
          cooking_skill_level?: string
          created_at?: string
          diet?: string | null
          email?: string
          favorite_cuisines?: string | null
          first_name?: string
          food_allergies?: string | null
          is_soft_deleted?: boolean
          last_name?: string
          phone_number?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
