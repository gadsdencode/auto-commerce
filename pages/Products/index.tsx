import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Beautiful, fast and modern React UI library.
					</h4>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
			<>
  <title>autoCommerce</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <link rel="stylesheet" href="assets/css/main.css" />
  {/* Header */}
  <header id="header">
    <a className="logo" href="index.html">
      Industrious
    </a>
    <nav>
      <a href="#menu">Menu</a>
    </nav>
  </header>
  {/* Nav */}
  <nav id="menu">
    <ul className="links">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="elements.html">Elements</a>
      </li>
      <li>
        <a href="generic.html">Generic</a>
      </li>
    </ul>
  </nav>
  {/* Heading */}
  <div id="heading">
    <h1>Generic Page</h1>
  </div>
  {/* Main */}
  <section id="main" className="wrapper">
    <div className="inner">
      <div className="content">
        <header>
          <h2>Feugiat consequat</h2>
        </header>
        <p>
          Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
          sagittis eget. tempus euismod. Magna et cursus lorem faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
          sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet
          praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet
          dolor feugiat consequat.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
          sagittis eget. tempus euismod. Magna et cursus lorem faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
          sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet
          praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet
          dolor feugiat consequat.{" "}
        </p>
        <hr />
        <h3>Magna odio tempus commodo</h3>
        <p>
          In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
          aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan
          erat tempus amet porttitor. Ante commodo blandit adipiscing integer
          semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan
          morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi
          accumsan vis mi accumsan ac praesent.
        </p>
        <p>
          Felis sagittis eget tempus primis in faucibus vestibulum. Blandit
          adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
          eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus lorem ipsum dolor sit amet nullam.
        </p>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer id="footer">
    <div className="inner">
      <div className="content">
        <section>
          <h3>Accumsan montes viverra</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing. Lorem ipsum dolor
            vestibulum ante ipsum primis in faucibus vestibulum. Blandit
            adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
            faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
            gravida.
          </p>
        </section>
        <section>
          <h4>Sem turpis amet semper</h4>
          <ul className="alt">
            <li>
              <a href="#">Dolor pulvinar sed etiam.</a>
            </li>
            <li>
              <a href="#">Etiam vel lorem sed amet.</a>
            </li>
            <li>
              <a href="#">Felis enim feugiat viverra.</a>
            </li>
            <li>
              <a href="#">Dolor pulvinar magna etiam.</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Magna sed ipsum</h4>
          <ul className="plain">
            <li>
              <a href="#">
                <i className="icon fa-twitter">&nbsp;</i>Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fa-facebook">&nbsp;</i>Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fa-instagram">&nbsp;</i>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fa-github">&nbsp;</i>Github
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
  <div id="copyright " className="copyright">
    Design by <a href="https://templated.co/">TEMPLATED</a>.
  </div>
  {/* Scripts */}
</>
		</DefaultLayout>
	);
}