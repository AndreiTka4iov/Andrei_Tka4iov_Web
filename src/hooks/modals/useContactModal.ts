import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useModal } from "./useModal";

export const useContactModal = () => {
  const {status, toggleModal} = useModal("contact");
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageValue, setMessageValue] = useState<string>("");
  const [telegramValue, setTelegramValue] = useState<string>("");
  const [validateEmail, setValidateEmail] = useState<boolean>(true);
  const [emailValueDebounce] = useDebouncedValue<string>(emailValue, 800);

  useEffect(() => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    setValidateEmail(!emailValue || !!emailValueDebounce.match(validRegex));
  }, [emailValueDebounce]);

  const clearModal = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setTelegramValue("");
  };

  return {
    status,
    toggleModal,
    clearModal,

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
