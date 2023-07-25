"use client";
import React, { useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import messages from "../data/messages.json";
import Message from "./Message";
import axios from "axios";

interface MessageData {
  id: string;
  name: string;
  message: string;
  date: string;
  first_name: string;
  last_name: string;
  datetime: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://aldevelopment.ngrok.dev/clients/sand/leads"
      );
      const data = await response.json();
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [messages]);

  return (
    <div className="w-[50%] m-auto mt-64 max-w-xl shadow-2xl">
      <div className="bg-mainBlue">
        <p className="flex justify-center py-2 text-white ">
          <EnvelopeIcon className="h-6 w-6 mr-2" /> Messages
        </p>
      </div>
      <div className="bg-white">
        {messages.map((message) => (
          <Message
            key={message.id}
            first_name={message.first_name}
            last_name={message.last_name}
            message={message.message}
            datetime={message.datetime}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
