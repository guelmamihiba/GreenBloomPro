import "./ImgSwiper.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ImgSwiper() {
  const images = [
    {
      id: "102",
      author: "Ben Moore",
      width: 4320,
      height: 3240,
      url: "https://i.pinimg.com/736x/0c/20/d6/0c20d6280d2715e13fe820965f569d2d.jpg",
      download_url: "https://i.pinimg.com/736x/0c/20/d6/0c20d6280d2715e13fe820965f569d2d.jpg"
    },
    {
      id: "103",
      author: "Ilham Rahmansyah",
      width: 2592,
      height: 1936,
      url: "https://i.pinimg.com/736x/c5/f4/cb/c5f4cb380263509e14cb8a557130f57f.jpg",
      download_url: "https://i.pinimg.com/736x/c5/f4/cb/c5f4cb380263509e14cb8a557130f57f.jpg"
    },
    {
      id: "104",
      author: "Dyaa Eldin",
      width: 3840,
      height: 2160,
      url: "https://i.pinimg.com/736x/35/73/11/3573111ba73c7cf4e09a129cf51aa137.jpg",
      download_url: "https://i.pinimg.com/736x/35/73/11/3573111ba73c7cf4e09a129cf51aa137.jpg"
    },
    {
      id: "106",
      author: "Arvee Marie",
      width: 2592,
      height: 1728,
      url: "https://i.pinimg.com/736x/8e/74/36/8e74368c3ef8b82cd2fb28d8711bf1eb.jpg",
      download_url: "https://i.pinimg.com/736x/74/0e/4e/740e4ea43374d8171bdb827fe146d8c6.jpg"
    },
    {
      id: "107",
      author: "Lukas Schweizer",
      width: 5000,
      height: 3333,
      url: "https://img.freepik.com/premium-photo/living-room-with-large-wall-that-has-plant-it-couch_399089-10960.jpg",
      download_url: "https://i.pinimg.com/736x/8e/74/36/8e74368c3ef8b82cd2fb28d8711bf1eb.jpg"
    },
    {
      id: "108",
      author: "Florian Klauer",
      width: 2000,
      height: 1333,
      url: "https://unsplash.com/photos/t1mqA3V3-7g",
      download_url: "https://i.pinimg.com/736x/a4/cc/94/a4cc94ae0eb9d705a21d2c3fe6b3f338.jpg"
    },
    {
      id: "109",
      author: "Zwaddi",
      width: 4287,
      height: 2392,
      url: "https://unsplash.com/photos/YvYBOSiBJE8",
      download_url: "https://i.pinimg.com/originals/46/a4/01/46a401df956013a3b435492ef28d4160.jpg"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Carousel
        className="crsl"
        autoPlay
        infiniteLoop
        centerMode
        interval={1000}
      >
        {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))}
      </Carousel>
    </div>
  );
}
