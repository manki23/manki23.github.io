import React from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledWorkPage = styled.div`
  padding: 100px 0px;
`

const WorkPage = () => {
  const { t } = useTranslation();

  return (
    <StyledWorkPage id="work-page">
      <h2>{t("workPageTitle")}</h2>
      <div>{t("workPageWip")}</div>
    </StyledWorkPage>
  );
};

export default WorkPage;
