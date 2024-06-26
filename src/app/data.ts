import src1 from "../../public/food/1.png";
import src2 from "../../public/food/2.png";
import src3 from "../../public/food/3.png";
import src4 from "../../public/food/4.png";
import src5 from "../../public/food/5.png";
import src6 from "../../public/food/6.png";
import src7 from "../../public/food/7.png";
import src8 from "../../public/food/8.png";
import src9 from "../../public/food/9.png";
import src10 from "../../public/food/10.png";
import { StaticImageData } from "next/image";

export interface RecipeItem {
  id: number;
  title: string;
  texts: string[];
  image_url: string | StaticImageData;
}

export const Hamburgers: RecipeItem[] = [
  {
    id: 1,
    title: "Hamburguesa Clásica",
    texts: [
      "Deliciosa hamburguesa con carne de res jugosa y queso derretido",
      "Acompañada de crujientes papas fritas",
      "¡Una explosión de sabor en cada bocado!",
    ],
    image_url: src1,
  },
  {
    id: 2,
    title: "Hamburguesa BBQ",
    texts: [
      "Carne a la parrilla con salsa BBQ, queso cheddar y cebolla caramelizada",
      "Servida con aros de cebolla crujientes",
      "Un clásico con un toque ahumado",
    ],
    image_url: src2,
  },
  {
    id: 3,
    title: "Hamburguesa Vegetariana",
    texts: [
      "Patty de garbanzos y espinacas con guacamole fresco y lechuga crujiente",
      "Acompañada de batatas fritas sazonadas",
      "Una opción saludable y deliciosa",
    ],
    image_url: src3,
  },
  {
    id: 4,
    title: "Hamburguesa con Queso Azul",
    texts: [
      "Carne de res jugosa con queso azul derretido y cebolla morada",
      "Servida con aros de cebolla y salsa especial",
      "Una combinación audaz de sabores",
    ],
    image_url: src4,
  },
  {
    id: 5,
    title: "Hamburguesa Doble Queso",
    texts: [
      "Doble carne de res con doble queso cheddar derretido",
      "Acompañada de patatas bravas",
      "Para los amantes de la carne y el queso",
    ],
    image_url: src5,
  },
  {
    id: 6,
    title: "Hamburguesa con Champiñones",
    texts: [
      "Carne de res con champiñones salteados y queso suizo derretido",
      "Servida con aros de cebolla y salsa especial",
      "Una opción sabrosa para los amantes de los champiñones",
    ],
    image_url: src6,
  },
  {
    id: 7,
    title: "Hamburguesa Mexicana",
    texts: [
      "Patty de carne sazonada con guacamole, jalapeños y salsa picante",
      "Acompañada de nachos crujientes y salsa de queso",
      "Una explosión de sabores latinoamericanos",
    ],
    image_url: src7,
  },
  {
    id: 8,
    title: "Hamburguesa de Pollo Crispy",
    texts: [
      "Patty de pollo crujiente con lechuga fresca y mayonesa de ajo",
      "Acompañada de aros de cebolla y salsa especial",
      "Perfecta para los amantes del pollo crujiente",
    ],
    image_url: src8,
  },
  {
    id: 9,
    title: "Hamburguesa Hawaiana",
    texts: [
      "Carne de res con rodajas de piña fresca y queso suizo derretido",
      "Servida con papas fritas y salsa de piña",
      "Un toque tropical en cada bocado",
    ],
    image_url: src9,
  },
];

export const parserItems = <T>(arrayItems: T[]): T[][] => {
  return arrayItems.reduce((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, [] as T[][]);
};
