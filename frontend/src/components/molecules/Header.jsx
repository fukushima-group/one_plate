import { LoginButton } from 'components/organisms/Modal/UserAuth/LoginButton.jsx';
import { LogoutButton } from 'components/organisms/Modal/UserAuth/LogoutButton.jsx';
import { UserProfile } from 'components/organisms/Modal/UserAuth/UserProfile.jsx';
import styled from 'styled-components';
import { HumbergerIcon } from '../atoms/Humberger/HumbergerIcon.jsx';

// header
const GlobalHeader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 72px;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  z-index: 36500;
`;

const HeaderTitle = styled.h2``;

export const Header = () => {
  return (
    <GlobalHeader>
      <HeaderTitle>One Plate</HeaderTitle>
      <LoginButton />
      <UserProfile />
      <LogoutButton />
      <HumbergerIcon />
    </GlobalHeader>
  );
};
