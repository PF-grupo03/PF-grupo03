export interface IProduct {
  id: number;
  image: string;
  image2: string;
  image3: string;
  title: string;
  description: string;
  description2: string;
  price: number;
  location: string;
  duration: string;
  stock: number;
  categories: string[];
}

export interface IProductListProps {
  products: IProduct[];
}

export interface IProductCardProps {
  product: IProduct;
  remove?: () => void;
}

export interface ICategory {
  name: string;
}

export interface ICredentials {
  password: string;
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  password: string;
  phone: number;
  dni: number;
  email: string;
  orders?: IOrderResponse[];
  isAdmin: boolean;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  user?: IUser;
}
export interface IRegisterUserResponse {
  name: string;
  username: string;
  password: string;
  phone: number;
  dni: number;
  email: string;
  role: string;
  credential: ICredentials;
}

export interface IUserResponse {
  login: boolean;
  user: Partial<IUser> | null;
  token: string;
}
export interface SignUpResponse {
  success: boolean;
  message: string;
  user?: IUser;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface IRegisterUser {
  name: string;
  username: string;
  password: string;
  phone: number;
  dni: number;
  email: string;
  isAdmin: boolean;
  profilePicture: string;
}

export interface RegisterPropsResponse {
  name: string;
  phone: number;
  email: string;
  password: string;
  role: string;
  credential: ICredentials;
}

export interface RegisterErrorProps {
  name?: string;
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface IUsercontextType {
  user: Partial<IUserResponse> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILoginUser) => Promise<SignInResponse>;
  signUp: (user: Omit<IUser, "id">) => Promise<SignInResponse>;
  getOrders: () => void;
  orders: IOrderResponse[] | [];
  logout: () => void;
}

export interface IOrderProps {
  order: IOrderResponse;
}

export interface IOrderResponse {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: IProduct[];
}

export interface ICreateOrder {
  userId: number;
  products: number;
}

export interface PaqueteDetalleProps {
  id: number;
  image: string;
  image2: string;
  image3: string;
  title: string;
  description: string;
  description2: string;
  price: number;
  location: string;
  duration: string;
  stock: number;
  categories: string[];
}

export interface ExtraServices {
  healthInsurance: boolean;
  medicalInsurance: boolean;
}

export interface BookingData {
  adults: number;
  children: number;
  selectedDate: string;
  extraServices: ExtraServices;
  total: number;
}

export interface BookingContextType {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
}
