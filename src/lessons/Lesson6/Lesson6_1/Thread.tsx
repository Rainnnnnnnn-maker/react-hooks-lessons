import { useRef, useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({ messages, sendMessage }: { messages: Message[]; sendMessage: (formData: FormData) => Promise<void> }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string) => [
      ...state, 
      { text: newMessage, sending: true, key: state.length + 1 }
    ]
  );

  const formAction = async (formData: FormData) => {
    const message = formData.get("message") as string;
    addOptimisticMessage(message);
    formRef.current?.reset();
    await sendMessage(formData);
  };

  return (
    <div>
      {optimisticMessages.map((message) => (
        <div key={message.key} className="flex items-center">
          <p className="text-lg">{message.text}</p>
          {message.sending && <span className="ml-2 text-sm text-gray-500">送信中...</span>}
        </div>
      ))}
      <form ref={formRef} action={formAction}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
