import React from "react";
import { Stack, Text, Separator } from "@fluentui/react";

const Footer = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" style={{ padding: 10 }}>
      <Stack horizontalAlign="start">
        <Stack horizontal>
          <Text>Primera columna de texto</Text>
          <Separator vertical />
        </Stack>
      </Stack>
      <Stack horizontalAlign="start" style={{}}>
        <Stack horizontal>
          <Text>Segunda columna de texto</Text>
          <Separator vertical />
        </Stack>
      </Stack>
      <Text>Otro contenido del footer</Text>
    </Stack>
  );
};

export default Footer;
