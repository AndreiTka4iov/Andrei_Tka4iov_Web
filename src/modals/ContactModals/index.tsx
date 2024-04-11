import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  Text,
  Textarea,
} from "@mantine/core";
import { IconAt, IconBrandTelegram, IconUser } from "@tabler/icons-react";
import styles from "./stylex.module.css";
import { useContactModal } from "@/hooks/modals/useContactModal";
import { FormEvent, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

const ContactModal = () => {
  const {
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
  } = useContactModal();

  const sendContactInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toggleModal();
    notifications.show({
      title: "succesful",
      message: "send",
      withCloseButton: true,
      autoClose: 3000,
      color: "teal",
      icon: <IconCheck />,
    });
  };

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
                onChange={(e) => setTelegramValue(e.currentTarget.value)}
                value={telegramValue}
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
                onChange={(e) => setNameValue(e.currentTarget.value)}
                value={nameValue}
              />
            </Input.Wrapper>
            <Textarea
              variant="filled"
              label="Your message"
              description="Enter your message so I can help you."
              placeholder="Your message"
              required
              w={"100%"}
              onChange={(e) => setMessageValue(e.target.value)}
              value={messageValue}
            />
            <Flex gap={16} className={styles.actionButtonBlock}>
              <Button w={"50%"} variant="default" onClick={toggleModal}>
                Close
              </Button>
              <Button type="submit" w={"50%"} variant="filled" color="violet">
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
