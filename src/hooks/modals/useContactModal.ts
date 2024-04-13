import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { globalSlice } from "@/store/global/globalSlice";

export const useContactModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [telegramValue, setTelegramValue] = useState<string>("");

  const [emailValueDebounce] = useDebouncedValue<string>(emailValue, 400);

  const { contactModal } = useAppSelector((state) => state.globalSlice);
  const { toggleContactModal } = globalSlice.actions;
  const dispatch = useAppDispatch();

  const toggleModal = () => dispatch(toggleContactModal());

  const validateEmail = useMemo<boolean>(() => {
    if (!emailValue) return true;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValueDebounce.match(validRegex)) return true;
    else return false;
  }, [emailValueDebounce]);

  const clearModal = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setTelegramValue("");
  };

  return {
    contactModal,
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
