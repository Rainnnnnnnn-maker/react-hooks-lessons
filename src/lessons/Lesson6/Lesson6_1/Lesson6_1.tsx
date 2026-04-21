import { useState } from "react";
import { deliverMessage } from "./actions";
import Thread from "./Thread";

export type Message = {
  text: string;
  sending: boolean;
  key: number;
};

const Lesson6_1 = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello world!",
      sending: false,
      key: 1,
    },
  ]);

  const sendMessage = async (formData: FormData) => {
    const message = formData.get("message") as string;
    
    // 楽観的UIのため、先にstateを更新してはいけない。
    // useOptimisticを使っている場合は、親コンポーネントでの実際の状態更新は
    // サーバーの応答を待ってから行うべき。
    const sentMessage = await deliverMessage(message);
    setMessages((messages: Message[]) => [
      ...messages,
      {
        text: sentMessage,
        sending: false,
        key: messages.length + 1,
      },
    ]);
  };

  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default Lesson6_1;
