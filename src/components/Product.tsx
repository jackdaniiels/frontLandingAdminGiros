import React, { ReactElement, createContext, useContext } from "react";

const imgFallback =
  "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png";
interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
}

interface Product {
  img?: string;
  title?: string;
}

interface ProductContextProps {
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const Product = ({ children, product }: Props) => {
  return (
    <Provider value={{ product }}>
      <div>{children}</div>
    </Provider>
  );
};

export const ProductImg = ({ img = "" }: Product) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = "";

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = imgFallback;
  }

  return <img src={imgToShow} width="100" height="auto" />;
};

export const ProductName = ({ title = "" }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return <h5 className="red">{title ? title : product.title}</h5>;
};

Product.Img = ProductImg;
Product.Description = ProductName;
