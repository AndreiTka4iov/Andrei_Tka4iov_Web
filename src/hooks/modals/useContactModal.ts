import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { globalSlice } from "@/store/global/GlobalSlice";

export const useContactModal = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [telegramValue, setTelegramValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

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

  return {
    contactModal,
    toggleModal,
    validateEmail,
    
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
