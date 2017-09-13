/**
*
* Wrapper
*
*/

import styled from 'styled-components';

// Keeps items vertically centered
// Also adds margin on top for the label
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 1.2rem;
`;

export default Wrapper;
