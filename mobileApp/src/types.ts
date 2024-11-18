export type RootStackParamList = {
  vendorRoute: {
    screen: keyof VendorStackParamList;
    params?: VendorStackParamList[keyof VendorStackParamList];
  };
};

export type VendorStackParamList = {
  Screen: {screen: string}; // Define other screens within the vendor stack as needed
  signup: undefined;
  login: undefined;
  qrCode: undefined;
  orderdetail: undefined;
};
