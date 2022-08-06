import { VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "src/components";
import { HomePage } from "src/pages";

export const App = () => (
  <VStack>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
          {/* <Route path="proposal/:id" element={<ProposalPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </VStack>
);
