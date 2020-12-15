import React from "react"
import { FiArrowRight } from "react-icons/fi"

import logoImg from "../../assets/images/logo.svg";

import * as S from "./style";

export const Landing = () => (
  <S.Container>
    <S.Wrapper>
      <img src={logoImg} alt="Happy logo" />

      <S.Main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças</p>
      </S.Main>

      <S.Location>
        <strong>Fortaleza</strong>
        <span>Ceará</span>
      </S.Location>

      <S.LinkButton to="/app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </S.LinkButton>
    </S.Wrapper>
  </S.Container>
);


