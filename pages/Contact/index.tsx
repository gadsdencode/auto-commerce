import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Footer1 } from "@/components/footer1";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<>
  <title>Projection by TEMPLATED</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/css/main.css" />
  {/* Header */}
  <header id="header">
    <div className="inner">
      <a href="#navPanel" className="navPanelToggle">
        <span className="fa fa-bars" />
      </a>
    </div>
  </header>
  {/* Banner */}
  <section id="banner">
    <div className="inner">
      <header>
        <h1 className={title()}>Products</h1>
      </header>
      <div className="flex ">
        <div>
          <span className="icon fa-car" />
          <h3 className={subtitle({ class: "mt-4" })}>Product1</h3>
          <p>X</p>
        </div>
        <div>
          <span className="icon fa-camera" />
          <h3 className={subtitle({ class: "mt-4" })}>Product2</h3>
          <p>X</p>
        </div>
        <div>
          <span className="icon fa-bug" />
          <h3 className={subtitle({ class: "mt-4" })}>Product3</h3>
          <p>X</p>
        </div>
      </div>
      <footer>
      <h3 className={subtitle({ class: "mt-4" })}>
          Featured Products
        </h3>
      </footer>
    </div>
  </section>
  {/* Three */}
  <section id="three" className="wrapper align-center">
    <div className="inner">
      <div className="flex flex-2">
        <article>
          <div className="image round">
            <img src="images/logo2.png" alt="Pic 01" />
          </div>
          <header>
            <h3>
              Lorem ipsum
              <br /> dolor amet nullam
            </h3>
          </header>
          <p>
            Morbi in sem quis dui placerat ornare. Pellentesquenisi
            <br />
            euismod in, pharetra a, ultricies in diam sed arcu. Cras
            <br />
            consequat egestas augue vulputate.
          </p>
          <footer>
            <a href="#" className="button">
              Learn More
            </a>
          </footer>
        </article>
        <article>
          <div className="image round">
            <img src="images/logo2.png" alt="Pic 02" />
          </div>
          <header>
            <h3>
              Sed feugiat
              <br /> tempus adipicsing
            </h3>
          </header>
          <p>
            Pellentesque fermentum dolor. Aliquam quam lectus
            <br />
            facilisis auctor, ultrices ut, elementum vulputate, nunc
            <br /> blandit ellenste egestagus commodo.
          </p>
          <footer>
            <a href="#" className="button">
              Learn More
            </a>
          </footer>
        </article>
        <article>
          <div className="image round">
            <img src="images/logo2.png" alt="Pic 02" />
          </div>
          <header>
            <h3>
              Sed feugiat
              <br /> tempus adipicsing
            </h3>
          </header>
          <p>
            Pellentesque fermentum dolor. Aliquam quam lectus
            <br />
            facilisis auctor, ultrices ut, elementum vulputate, nunc
            <br /> blandit ellenste egestagus commodo.
          </p>
          <footer>
            <a href="#" className="button">
              Learn More
            </a>
          </footer>
        </article>
        <article>
          <div className="image round">
            <img src="images/logo2.png" alt="Pic 02" />
          </div>
          <header>
            <h3>
              Sed feugiat
              <br /> tempus adipicsing
            </h3>
          </header>
          <p>
            Pellentesque fermentum dolor. Aliquam quam lectus
            <br />
            facilisis auctor, ultrices ut, elementum vulputate, nunc
            <br /> blandit ellenste egestagus commodo.
          </p>
          <footer>
            <a href="#" className="button">
              Learn More
            </a>
          </footer>
        </article>
      </div>
    </div>
  </section>
</>
			</section>
      <Footer1 />
		</DefaultLayout>
	);
}