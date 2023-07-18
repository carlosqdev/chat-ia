import type { Message } from "ai";

import CardMessage from "./cardMessage";
import { UnorderedList } from "@chakra-ui/react";

interface PropsContainerMessages {
  messages: Message[];
}

export default function ContainerMessages({
  messages,
}: PropsContainerMessages) {
  return (
    <UnorderedList border="10px solid purple">
      {messages.map((message) => (
        <CardMessage
          key={message.id}
          content={message.content}
          role={message.role}
        />
      ))}
    </UnorderedList>
  );
}
