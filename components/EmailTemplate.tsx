import React from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  message: string;
};

function EmailTemplate({ name, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Message From Portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Heading>New Message Received from {name}</Heading>
            <Hr />
            <Section>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default EmailTemplate;
