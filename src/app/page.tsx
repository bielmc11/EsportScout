import { SectionContainer } from "@/components/SectionContainer";
import Layout from "./layout";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <Layout>
      {/* <SectionContainer>
        <Header/>
        
      </SectionContainer> */}
      <Sidebar/>
    </Layout>
  );
}
