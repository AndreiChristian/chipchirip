export interface Message {
  id?: string;
  sender_id: string;
  conversation_id: string | null;
  group_id: string | null;
  content: string;
  created_at?: Date;
}
