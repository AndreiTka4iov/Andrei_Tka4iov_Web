import axios from "axios";

export const contactApi = async (message: string) => {
  const telegramBot = process.env.NEXT_PUBLIC_TELEGRAM_URL as string;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID as string;

  return await axios.post(telegramBot, {
    message,
    chatId: +chatId,
  });
};
