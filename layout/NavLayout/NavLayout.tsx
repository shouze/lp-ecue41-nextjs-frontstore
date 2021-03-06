import styled from "styled-components";
import Head from "next/head";
import { Header } from "../../features";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const NavLayout = (props: Props) => {
  return (
    <Wrapper>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{props.children}</Main>
    </Wrapper>
  );
};

export default NavLayout;

const Wrapper = styled.div``;
const Main = styled.main`
  margin-top: 30px;
`;
