# Real-Time Chat System - DPI Chat

Complete real-time messaging implementation for Admin, Customer, and Member portals using Pusher Channels.

## ✅ What Has Been Implemented

### 1. **Database Schema**

- **Message Model** in Prisma schema with:
  - `id`: Unique message identifier
  - `senderId`: User who sent the message
  - `receiverId`: User who receives the message
  - `message`: Message text content
  - `seen`: Read receipt boolean
  - `createdAt`: Timestamp
  - `updatedAt`: Last modified timestamp
  - Relations to User model for sender/receiver

### 2. **Real-Time Infrastructure**

#### Pusher Configuration

- **Server**: `/lib/chat/pusher-server.ts` - Pusher server instance for API routes
- **Client**: `/lib/chat/pusher-client.ts` - Pusher client for React components
- **Channel naming**: `private-chat-{userId1}-{userId2}` (sorted IDs for consistency)

#### API Routes

- **`POST /api/chat/send`** - Send new message, save to DB, broadcast via Pusher
- **`GET /api/chat/messages?userId={id}`** - Get all messages between two users
- **`GET /api/chat/conversations`** - Get conversation list with unread counts
- **`POST /api/chat/pusher/auth`** - Authenticate Pusher private channels

### 3. **Chat Utilities** (`/lib/chat/messages.ts`)

- `getMessages(userId1, userId2)` - Fetch messages between two users
- `sendMessage(senderId, receiverId, message)` - Create and save new message
- `markMessagesAsSeen(senderId, receiverId)` - Update read receipts
- `getConversations(userId)` - Get user's conversation list with metadata

### 4. **DPIChat Component** (Fully Real-Time)

**Location**: `/components/dpi/chat/DPIChat.tsx`

**Features**:

- ✅ Real-time message subscription via Pusher
- ✅ Optimistic UI updates (messages appear instantly)
- ✅ Auto-scroll to new messages
- ✅ Message persistence in database
- ✅ Loading states
- ✅ Error handling with rollback
- ✅ Duplicate message prevention
- ✅ Clean Pusher subscription cleanup

**Props**:

```typescript
interface DPIChatProps {
  currentUserId: string; // Current logged-in user
  currentUserName: string; // Display name
  recipientId: string; // Who they're chatting with
  recipientName: string; // Recipient display name
  recipientAvatar?: string; // Optional avatar URL
}
```

### 5. **Portal Integration**

#### Admin Portal (`/admin/messages`)

- View all users (customers, members, staff)
- Select any user to chat with
- Conversation list with unread counts
- Server component fetches available users
- Client component handles real-time chat

#### Customer Portal (`/customer/messages`)

- Chat directly with admin/support team
- Single conversation view
- Automatic admin user assignment

#### Member Portal (`/member/messages`)

- Chat with admin team
- Single conversation view
- Task and project communication

## 🚀 Setup Instructions

### Step 1: Create Pusher Account

1. Go to https://pusher.com/
2. Sign up for free account
3. Create a new Channels app
4. Note your credentials:
   - App ID
   - Key
   - Secret
   - Cluster

### Step 2: Configure Environment Variables

Add these to your `.env` file:

```bash
# Pusher Configuration
PUSHER_APP_ID=your_app_id
NEXT_PUBLIC_PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
```

### Step 3: Database Migration

The Message model has already been pushed to your database via `prisma db push`.

To verify:

```bash
npx prisma studio
```

Check for the `messages` table.

### Step 4: Test the System

1. Start dev server: `npm run dev`
2. Sign in as admin: `hello@designpi.com` / `admin123`
3. Go to `/admin/messages`
4. Select a user and send a message
5. Open another browser/incognito window
6. Sign in as customer: `john.doe@example.com` / `customer123`
7. Go to `/customer/messages`
8. See the message appear in real-time!

## 📁 File Structure

```
/lib/chat/
├── pusher-server.ts       # Pusher server config
├── pusher-client.ts       # Pusher client config
└── messages.ts            # Database operations

/app/api/chat/
├── send/route.ts          # POST - Send message
├── messages/route.ts      # GET - Fetch messages
├── conversations/route.ts # GET - Get conversation list
└── pusher/
    └── auth/route.ts      # POST - Authenticate channels

/components/dpi/chat/
├── DPIChat.tsx            # Main chat component (REAL-TIME)
├── MessageBubble.tsx      # Individual message
├── MessageList.tsx        # Scrollable message container
├── ChatInput.tsx          # Input with send button
└── README.md              # Original component docs

/app/admin/messages/
├── page.tsx               # Server component
└── AdminMessagesClient.tsx # Client component

/app/customer/messages/
└── page.tsx               # Customer chat page

/app/member/messages/
└── page.tsx               # Member chat page
```

## 🔒 Security Features

### 1. **Private Channels**

- Each chat uses a private Pusher channel
- Users must be authenticated to subscribe
- Channel auth route verifies user belongs to conversation

### 2. **Database Authorization**

- API routes check user authentication via NextAuth
- Messages only fetched/sent if user is participant
- Conversation list only shows user's own chats

### 3. **Role-Based Access**

- Admin: Can chat with any non-admin user
- Customer: Can only chat with admin users
- Member: Can only chat with admin users

## 🎯 How It Works

### Sending a Message

1. **User types and clicks Send**
2. **Optimistic Update**: Message appears immediately in UI
3. **API Call**: POST to `/api/chat/send`
   - Validates authentication
   - Saves message to database
   - Broadcasts to Pusher channel
4. **Real-time Broadcast**: Pusher sends event to all channel subscribers
5. **Recipient Receives**: Message appears instantly on their screen
6. **Confirmation**: Sender's optimistic message gets replaced with real DB version

### Receiving a Message

1. **Component subscribes** to Pusher channel on mount
2. **New message event** received from Pusher
3. **State update**: Message added to local state
4. **Auto-scroll**: Message list scrolls to bottom
5. **Read receipt**: Message marked as seen via API

## 🔧 Customization Options

### Add Typing Indicators

```typescript
// In DPIChat.tsx, add:
const [isTyping, setIsTyping] = useState(false);

// On input change:
pusherServer.trigger(channel, "typing", { userId: currentUserId });

// Subscribe to typing events:
pusherChannel.bind("typing", (data) => {
  if (data.userId !== currentUserId) {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 3000);
  }
});
```

### Add File Uploads

1. Update Message model to include `fileUrl` field
2. Add file upload to ChatInput component
3. Store files using your existing `/lib/storage.ts` system
4. Display files in MessageBubble component

### Add Group Chats

1. Create new `GroupMessage` model with `groupId`
2. Update Pusher channel naming to use group IDs
3. Modify API routes to handle group conversations

## 📊 Monitoring

### Pusher Dashboard

- View real-time connections
- Monitor message throughput
- Debug channel subscriptions
- Check API usage

### Database Queries

```sql
-- Count total messages
SELECT COUNT(*) FROM messages;

-- Messages per user
SELECT senderId, COUNT(*) as sent_count
FROM messages
GROUP BY senderId;

-- Unread messages
SELECT receiverId, COUNT(*) as unread_count
FROM messages
WHERE seen = false
GROUP BY receiverId;
```

## 🐛 Troubleshooting

### Messages not appearing in real-time

1. Check Pusher credentials in `.env`
2. Verify Pusher dashboard shows active connections
3. Check browser console for Pusher connection errors
4. Ensure API route `/api/chat/pusher/auth` returns 200

### Messages saved but not showing

1. Check database for message records
2. Verify `getMessages()` query is correct
3. Check component is subscribed to correct channel
4. Look for React state update issues

### Pusher authentication fails

1. Verify channel name format matches auth route
2. Check user session is valid
3. Ensure user IDs match channel participants

## 📝 Next Steps (Optional Enhancements)

- [ ] Add message search functionality
- [ ] Implement message deletion
- [ ] Add emoji reactions
- [ ] Create notification system for new messages
- [ ] Add voice/video call integration
- [ ] Implement message threading
- [ ] Add rich text formatting
- [ ] Create message templates for common responses

## 🎉 Success!

Your real-time chat system is now fully operational across all portals. Messages are persistent, secure, and update in real-time without page refreshes!
