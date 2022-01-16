import React from "react";
import { Product } from "../../components/Product";
const baseProduct = {
  img: "https://www.nicepng.com/png/full/222-2224705_react-js-logo.png",
  title: "React JS",
} as any;

const imgCustom = "https://pngset.com/images/react-native-react-native-logo-word-text-symbol-trademark-transparent-png-814881.png"

export const Password = () => {
  return (
    <div>
      <h1>Password</h1>
      <Product product={baseProduct}>
        <Product.Img img={ imgCustom } />
        <Product.Description />
      </Product>
    </div>
  );
};

export default Password;
