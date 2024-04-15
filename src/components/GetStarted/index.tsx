import { Button, Flex, Input, Text, Textarea, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { BiLogoTelegram } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useGetStarted } from "@/hooks/homePage/useGetStarted";
import { FormEvent } from "react";
import { contactApi } from "@/API/contact/route";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { IconAt, IconBrandTelegram, IconUser } from "@tabler/icons-react";

const GetStarted = () => {
  const {
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
  } = useGetStarted();

  const sendContactInfo = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if ((!emailValue && !telegramValue) || !nameValue || !messageValue) return;

    try {
      await contactApi({
        email: emailValue,
        telegram: telegramValue,
        name: nameValue,
        message: messageValue,
      });

      notifications.show({
        title: "All good!",
        message: "Your message has been successfully delivered.",
        withCloseButton: true,
        autoClose: 3000,
        color: "teal",
        icon: <IconCheck />,
      });
    } catch {
      notifications.show({
        title: "Error",
        message: "An unforeseen error occurred. Try again later.",
        withCloseButton: true,
        autoClose: 3000,
        color: "red",
        icon: <IconX />,
      });
    } finally {
      clearForm();
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.wrapper} id="wrapper">
      <Title className={styles.title}>
        How do you get started working with me?
      </Title>
      <Text className={styles.text}>
        After reviewing my portfolio, do you have questions, need help, or have
        a job offer? Please use one of the following methods to contact me.
      </Text>
      <Flex mt={32} direction={"column"} gap={16} className={styles.linksBody}>
        <a
          href="https://github.com/AndreiTka4iov"
          className={styles.linkButton}
        >
          <FaGithub /> GitHub
        </a>
        <a href="https://t.me/tcka4" className={styles.linkButton}>
          <BiLogoTelegram className={styles.icon} /> Telegram
        </a>
        <a
          href="mailto:andrei.tkachiov@gmail.com"
          className={styles.linkButton}
        >
          <IoMdMail className={styles.icon} /> andrei.tkachiov@gmail.com
        </a>
      </Flex>
      <form onSubmit={sendContactInfo} className={styles.form}>
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

        <Button
          type="submit"
          variant="filled"
          color="violet"
          ml={'auto'}
          loading={isLoading}
          disabled={
            (!telegramValue && !emailValue) || !nameValue || !messageValue
          }
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default GetStarted;
