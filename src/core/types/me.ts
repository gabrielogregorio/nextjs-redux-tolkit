export type userType = {
  id: number;
  name: string;
  url_profile: string;
};

export type userStateType = {
  data: userType;
  loading: boolean;
  error: boolean;
};
