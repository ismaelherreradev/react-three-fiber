import {
  Container,
  TopLeft,
  BottomLeft,
  BottomRight,
  Hamburger,
} from "./styles";
import { VelvetBanana } from "./VelvetBanana";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          LANDING
          <br />
          PAGES —
        </h1>
      </TopLeft>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  );
}
