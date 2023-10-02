import styled from "styled-components";

interface FliterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--textos-dark-textos-apoio);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function FilterByPriority() {
  return (
    <FilterContainer>
      <p>Organizar por</p>
    </FilterContainer>
  );
}
