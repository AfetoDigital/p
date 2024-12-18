// CSS & JS
import Container from "./Container.js";
import AppMain from "./../layout/AppMain.js";
import {FramesSquare as Frames, FrameSquare as Frame} from "./Frames.js";

// IMAGES
import backgroundIMG from "./../images/background3.jpeg";
import user from "./../images/photo1.jpg";


function Atheletes() {
  return (
    <AppMain>
      <Container padding="padded-class" background={backgroundIMG}>
        <i id="start" className="br"></i>
        <Frames>
          <Frame name="Teste" image={user} whatsapp="123" ></Frame>
          <Frame name="Teste" image={user} whatsapp="123" instagram="123"></Frame>
          <Frame name="Teste" image={user} whatsapp="123" instagram="123" facebook="123"></Frame>
        </Frames>
      </Container>
    </AppMain>
  );
}

export default Atheletes;
