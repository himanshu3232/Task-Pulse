interface IUserStatus {
  loginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
  registerStatus: boolean;
  setRegisterStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
