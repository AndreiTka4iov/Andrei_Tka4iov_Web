import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { useAppDispatch } from "../redux";

export const useGetStarted = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [telegramValue, setTelegramValue] = useState<string>("");

  const [emailValueDebounce] = useDebouncedValue<string>(emailValue, 400);

  const validateEmail = useMemo<boolean>(() => {
    if (!emailValue) return true;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValueDebounce.match(validRegex)) return true;
    else return false;
  }, [emailValueDebounce]);

  const clearForm = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setTelegramValue("");
  };

  return {
    clearForm,

    validateEmail,

    isLoading,
    setIsLoading,

    emailValue,
    setEmailValue,
    telegramValue,
    setTelegramValue,
    nameValue,
    setNameValue,
    messageValue,
    setMessageValue,
  };
};
