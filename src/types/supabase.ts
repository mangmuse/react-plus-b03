<<<<<<< HEAD
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]
=======
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3

export type Database = {
  public: {
    Tables: {
      calendars: {
        Row: {
          createdAt: string
          description: string
          id: string
          name: string
          ownerId: string
        }
        Insert: {
          createdAt?: string
          description?: string
          id?: string
          name?: string
          ownerId: string
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          name?: string
          ownerId?: string
        }
        Relationships: [
          {
<<<<<<< HEAD
            foreignKeyName: "calendars_owner_id_fkey"
            columns: ["ownerId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
=======
            foreignKeyName: "calendars_owner_id_fkey";
            columns: ["ownerId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
      comments: {
        Row: {
          calendarId: string
          content: string
          createdAt: string
          id: string
          userId: string
        }
        Insert: {
          calendarId: string
          content: string
          createdAt?: string
          id?: string
          userId: string
        }
        Update: {
          calendarId?: string
          content?: string
          createdAt?: string
          id?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_calendarId_fkey"
            columns: ["calendarId"]
            isOneToOne: false
            referencedRelation: "calendars"
            referencedColumns: ["id"]
          },
          {
<<<<<<< HEAD
            foreignKeyName: "comments_user_id_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
=======
            foreignKeyName: "comments_user_id_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
      default_calendars: {
        Row: {
          createdAt: string
          id: string
          userId: string
        }
        Insert: {
          createdAt?: string
          id?: string
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          userId?: string
        }
        Relationships: [
          {
<<<<<<< HEAD
            foreignKeyName: "default_calendars_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
=======
            foreignKeyName: "default_calendars_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
      default_todos: {
        Row: {
          createdAt: string
          defaultCalendarId: string
          description: string | null
          endDate: string | null
          id: string
          startDate: string | null
          title: string
          userId: string | null
        }
        Insert: {
          createdAt?: string
          defaultCalendarId: string
          description?: string | null
          endDate?: string | null
          id?: string
          startDate?: string | null
          title: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          defaultCalendarId?: string
          description?: string | null
          endDate?: string | null
          id?: string
          startDate?: string | null
          title?: string
          userId?: string | null
        }
        Relationships: [
          {
<<<<<<< HEAD
            foreignKeyName: "default_todos_calendarId_fkey"
            columns: ["defaultCalendarId"]
            isOneToOne: false
            referencedRelation: "default_calendars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "default_todos_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      participants: {
        Row: {
          calendarId: string
          createdAt: string
          id: string
          userId: string
        }
        Insert: {
          calendarId: string
          createdAt?: string
          id?: string
          userId: string
        }
        Update: {
          calendarId?: string
          createdAt?: string
          id?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "participants_calendar_id_fkey"
            columns: ["calendarId"]
            isOneToOne: false
            referencedRelation: "calendars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participants_user_id_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
=======
            foreignKeyName: "default_todos_calendarId_fkey";
            columns: ["calendarId"];
            isOneToOne: false;
            referencedRelation: "default_calendars";
            referencedColumns: ["id"];
          },
        ];
      };
      participants: {
        Row: {
          calendarId: string;
          createdAt: string;
          id: string;
          userId: string;
        };
        Insert: {
          calendarId: string;
          createdAt?: string;
          id?: string;
          userId: string;
        };
        Update: {
          calendarId?: string;
          createdAt?: string;
          id?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "participants_calendar_id_fkey";
            columns: ["calendarId"];
            isOneToOne: false;
            referencedRelation: "calendars";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "participants_user_id_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
      todos: {
        Row: {
          calendarId: string
          createdAt: string
          description: string | null
          endDate: string | null
          id: string
          isDone: boolean
          isImportant: boolean
          startDate: string | null
          title: string
          userId: string | null
        }
        Insert: {
          calendarId: string
          createdAt?: string
          description?: string | null
          endDate?: string | null
          id?: string
          isDone?: boolean
          isImportant?: boolean
          startDate?: string | null
          title?: string
          userId?: string | null
        }
        Update: {
          calendarId?: string
          createdAt?: string
          description?: string | null
          endDate?: string | null
          id?: string
          isDone?: boolean
          isImportant?: boolean
          startDate?: string | null
          title?: string
          userId?: string | null
        }
        Relationships: [
          {
<<<<<<< HEAD
            foreignKeyName: "todos_calendar_id_fkey"
            columns: ["calendarId"]
            isOneToOne: false
            referencedRelation: "calendars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todos_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
=======
            foreignKeyName: "todos_calendar_id_fkey";
            columns: ["calendarId"];
            isOneToOne: false;
            referencedRelation: "calendars";
            referencedColumns: ["id"];
          },
        ];
      };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
      users: {
        Row: {
          email: string
          id: string
          image_url: string | null
          nickname: string
        }
        Insert: {
          email: string
          id?: string
          image_url?: string | null
          nickname: string
        }
        Update: {
          email?: string
          id?: string
          image_url?: string | null
          nickname?: string
        }
        Relationships: [
          {
<<<<<<< HEAD
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
=======
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
<<<<<<< HEAD
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
=======
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
>>>>>>> 605beda19af2e998c1a696daf301ec42d645f8a3
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
