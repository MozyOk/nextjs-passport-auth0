import styled from "styled-components";

const Rocket = styled.div`
  text-align: center;
  img {
    width: 630px;
  }
`;

function Index() {
  return (
    <Rocket>
      <img src="https://media.giphy.com/media/J39gurpvL7SHpnTTJB/giphy.gif" />
    </Rocket>
  );
}

export default Index;