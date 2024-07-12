export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      calendars: {
        Row: {
          createdAt: string;
          description: string;
          id: string;
          name: string;
          ownerId: string;
        };
        Insert: {
          createdAt?: string;
          description?: string;
          id?: string;
          name?: string;
          ownerId: string;
        };
        Update: {
          createdAt?: string;
          description?: string;
          id?: string;
          name?: string;
          ownerId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "calendars_owner_id_fkey";
            columns: ["ownerId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      comments: {
        Row: {
          calendarId: string;
          content: string;
          createdAt: string;
          id: string;
          userId: string;
        };
        Insert: {
          calendarId: string;
          content: string;
          createdAt?: string;
          id?: string;
          userId: string;
        };
        Update: {
          calendarId?: string;
          content?: string;
          createdAt?: string;
          id?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "comments_calendarId_fkey";
            columns: ["calendarId"];
            isOneToOne: false;
            referencedRelation: "calendars";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comments_user_id_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      default_calendars: {
        Row: {
          createdAt: string;
          id: string;
          userId: string;
        };
        Insert: {
          createdAt?: string;
          id?: string;
          userId: string;
        };
        Update: {
          createdAt?: string;
          id?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "default_calendars_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      default_todos: {
        Row: {
          calendarId: string;
          createdAt: string;
          description: string | null;
          endDate: string | null;
          id: string;
          startDate: string | null;
          title: string;
        };
        Insert: {
          calendarId: string;
          createdAt?: string;
          description?: string | null;
          endDate?: string | null;
          id?: string;
          startDate?: string | null;
          title: string;
        };
        Update: {
          calendarId?: string;
          createdAt?: string;
          description?: string | null;
          endDate?: string | null;
          id?: string;
          startDate?: string | null;
          title?: string;
        };
        Relationships: [
          {
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
      todos: {
        Row: {
          calendarId: string;
          createdAt: string;
          description: string | null;
          endDate: string | null;
          id: string;
          isDone: boolean;
          isImportant: boolean;
          startDate: string | null;
          title: string;
        };
        Insert: {
          calendarId: string;
          createdAt?: string;
          description?: string | null;
          endDate?: string | null;
          id?: string;
          isDone?: boolean;
          isImportant?: boolean;
          startDate?: string | null;
          title?: string;
        };
        Update: {
          calendarId?: string;
          createdAt?: string;
          description?: string | null;
          endDate?: string | null;
          id?: string;
          isDone?: boolean;
          isImportant?: boolean;
          startDate?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "todos_calendar_id_fkey";
            columns: ["calendarId"];
            isOneToOne: false;
            referencedRelation: "calendars";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          email: string;
          id: string;
          image_url: string | null;
          nickname: string;
        };
        Insert: {
          email: string;
          id?: string;
          image_url?: string | null;
          nickname: string;
        };
        Update: {
          email?: string;
          id?: string;
          image_url?: string | null;
          nickname?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

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
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
