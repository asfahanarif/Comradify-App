import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { light } from "@mui/material/styles/createPalette";

export default function Page() {
  return <SignIn appearance={{ baseTheme: dark }} />;
}
