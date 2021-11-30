import styled from 'styled-components';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar/Sidebar';

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>Chat</ChatContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none; /*IE and Edge*/
  scrollbar-width: none; /*Firefox*/
`;
