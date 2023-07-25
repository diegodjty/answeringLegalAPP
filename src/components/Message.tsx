import React from "react";

interface MessageData {
  first_name: string;
  last_name: string;
  message: string;
  datetime: string;
}

const Message: React.FC<MessageData> = ({
  first_name,
  last_name,
  message,
  datetime,
}) => {
  return (
    <div className="border-b border-mainBlue p-6 hover:cursor-pointer hover:bg-slate-300 transition-all duration-100 last:border-b-0">
      <p className="text-right text text-xs text-slate-600">{datetime}</p>
      <div>
        <p className="font-bold">{`${first_name} ${last_name}`}</p>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Message;
