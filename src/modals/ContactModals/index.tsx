import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { globalSlice } from "@/store/global/GlobalSlice";
import {
  Button,
  Flex,
  Image,
  Indicator,
  Input,
  Modal,
  Text,
  Textarea,
  UnstyledButton,
} from "@mantine/core";
import { FormEvent, useMemo, useState } from "react";
import { IconAt, IconBrandTelegram, IconUser } from "@tabler/icons-react";
import styles from "./stylex.module.css";
import { useDebouncedValue } from "@mantine/hooks";

const ContactModal = () => {
  const [emailValue, setEmailValue] = useState<string>("");

  const [emailValueDebounce] = useDebouncedValue<string>(emailValue, 400);

  const { contactModal } = useAppSelector((state) => state.globalSlice);
  const { toggleContactModal } = globalSlice.actions;
  const dispatch = useAppDispatch();

  const toggleModal = () => dispatch(toggleContactModal());

  const sendContactInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const validateEmail = useMemo<boolean>(() => {
    if (!emailValue) return true;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValueDebounce.match(validRegex)) return true;
    else return false;
  }, [emailValueDebounce]);

  return (
    <Modal.Root
      opened={contactModal}
      onClose={toggleModal}
      centered
      zIndex={1000}
    >
      <Modal.Overlay blur={2} />
      <Modal.Content bg={"#000"} className={styles.modalContent}>
        <Modal.Body p={0} bg={"#000"}>
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPNlG0WChytqPZpCKa2ypk7xjJnLUDiTpdp1bmzIvpw&s`}
            w={"100%"}
          />
          <form onSubmit={sendContactInfo} className={styles.form}>
            <Text color="#888" size="sm">
              Do you have a question or need help? Contact me via email,
              telegram, or the contact form below. I will be happy to help you.
            </Text>
            <Input.Wrapper
              label="Your email"
              description="Enter your e-mail address so I can contact you."
              error={!validateEmail && "Email is invalid"}
              w={"100%"}
            >
              <Input
                type="email"
                placeholder="Email"
                variant="filled"
                leftSection={<IconAt size={16} />}
                onChange={(e) => setEmailValue(e.currentTarget.value)}
                value={emailValue}
              />
            </Input.Wrapper>
            <span className={styles.orBlock}>
              OR{" "}
              <Text color="red" ml={2}>
                *
              </Text>
            </span>

            <Input.Wrapper
              label="Your telegram"
              description="Enter your telegram address so I can contact you."
              w={"100%"}
            >
              <Input
                placeholder="Telegram"
                variant="filled"
                leftSection={<IconBrandTelegram size={16} />}
                onChange={(e) => setEmailValue(e.currentTarget.value)}
                value={emailValue}
              />
            </Input.Wrapper>
            <Input.Wrapper
              label="Your name"
              description="Enter your first and last name."
              required
              w={"100%"}
            >
              <Input
                placeholder="Name"
                variant="filled"
                leftSection={<IconUser size={16} />}
                onChange={(e) => setEmailValue(e.currentTarget.value)}
                value={emailValue}
              />
            </Input.Wrapper>
            <Textarea
              variant="filled"
              label="Your message"
              description="Enter your message so I can help you."
              placeholder="Your message"
              required
              w={"100%"}
            />
            <Flex className={styles.actionButtonBlock}>
              <Button
                w={"50%"}
                variant="subtle"
                color="gray"
                onClick={toggleModal}
              >
                Close
              </Button>
              <hr className={styles.hr} />
              <Button w={"50%"} variant="subtle" color="violet">
                Send
              </Button>
            </Flex>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ContactModal;
