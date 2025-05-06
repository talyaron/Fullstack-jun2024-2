export interface Message{
    name: string;
    message: string;
    timestamp: string;
}

export const messagesModel: Message[] = [
    { name: "Alice", message: "Hey, how are you?", timestamp: "2025-04-27T10:00:00Z" },
    { name: "Bob", message: "I'm doing great, thanks!", timestamp: "2025-04-27T10:05:00Z" },
    { name: "Charlie", message: "Good to hear, Alice!", timestamp: "2025-04-27T10:10:00Z" },
    { name: "David", message: "What’s everyone up to?", timestamp: "2025-04-27T10:15:00Z" },
    { name: "Eve", message: "Just working on some projects.", timestamp: "2025-04-27T10:20:00Z" },
    { name: "Frank", message: "Same here. Busy day!", timestamp: "2025-04-27T10:25:00Z" },
    { name: "Grace", message: "Anyone down for a game later?", timestamp: "2025-04-27T10:30:00Z" },
    { name: "Hank", message: "I’m in! Let’s do it.", timestamp: "2025-04-27T10:35:00Z" },
    { name: "Ivy", message: "Count me in too!", timestamp: "2025-04-27T10:40:00Z" },
    { name: "Jack", message: "I’ll join, just finishing up something.", timestamp: "2025-04-27T10:45:00Z" },
    { name: "Kara", message: "What game are we playing?", timestamp: "2025-04-27T10:50:00Z" },
    { name: "Leo", message: "How about Fortnite?", timestamp: "2025-04-27T10:55:00Z" }
];
