import { VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "src/components";

export const App = () => (
  <VStack>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />}>
          <Route index element={<div />} />
          {/* <Route path="proposal/:id" element={<ProposalPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </VStack>
);
