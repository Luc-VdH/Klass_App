export interface homeProps {
  username: string;
  password: string;
}

export interface fbProps {
  name: string;
  code: string;
}

export interface newFamilyProps {
  input: string;
  actionName: string;
  action: Function;
}

export interface loginProps {
  setUN: React.Dispatch<React.SetStateAction<string>>;
  setPW: React.Dispatch<React.SetStateAction<string>>;
}
