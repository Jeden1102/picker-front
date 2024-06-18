export interface UserInterface {
  email: string;
}

interface ImageAttributes {
  url: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface Image {
  data: ImageData;
}

interface Attributes {
  subtitle: string;
  title: string;
  content: string;
  category: string;
  image: Image;
}

export interface Article {
  id: number;
  attributes: Attributes;
}
