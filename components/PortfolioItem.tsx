import { Fragment, type PropsWithChildren } from "react";
import Image from "next/image";
import type { Icons } from "./component-icon";
import {
  AlpineJsIcon,
  AxiosIcon,
  BootstrapIcon,
  CSSIcon,
  ExpressIcon,
  FilamentPHPIcon,
  FormikIcon,
  GithubIcon,
  GolangIcon,
  HTMLIcon,
  JavascriptIcon,
  LaravelIcon,
  LivewireIcon,
  LUAIcon,
  MaterialTailwindCSSIcon,
  NanostoresIcon,
  NextJsIcon,
  NodeJsIcon,
  NuxtIcon,
  PHPIcon,
  PiniaIcon,
  PostgresqlIcon,
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon,
  RobloxStudioIcon,
  SocketIOIcon,
  TailwindCSSIcon,
  TansactackQueryIcon,
  VueIcon,
  VuelidateIcon,
  VuexIcon,
} from "./component-icon";

export interface PortfolioItemProps extends PropsWithChildren {
  img: string;
  width: number;
  height: number;
  unoptimized?: boolean;
  altImg: string;
  project: {
    title: string;
    link: string;
  };
  techStacks?: Icons[];
  cardImgClassName?: string;
}

function renderTechStackIcon(techStack: Icons) {
  switch (techStack) {
    case "react":
      return <ReactIcon />;
    case "javascript":
      return <JavascriptIcon />;
    case "postgresql":
      return <PostgresqlIcon />;
    case "html":
      return <HTMLIcon />;
    case "css":
      return <CSSIcon />;
    case "socketIO":
      return <SocketIOIcon />;
    case "express":
      return <ExpressIcon />;
    case "reactNative":
      return <ReactNativeIcon />;
    case "bootstrap":
      return <BootstrapIcon />;
    case "github":
      return <GithubIcon />;
    case "golang":
      return <GolangIcon />;
    case "laravel":
      return <LaravelIcon />;
    case "vue":
      return <VueIcon />;
    case "nuxt":
      return <NuxtIcon />;
    case "lua":
      return <LUAIcon />;
    case "robloxStudio":
      return <RobloxStudioIcon />;
    case "nextjs":
      return <NextJsIcon />;
    case "formik":
      return <FormikIcon />;
    case "tailwindcss":
      return <TailwindCSSIcon />;
    case "material-tailwindcss":
      return <MaterialTailwindCSSIcon />;
    case "nanostores":
      return <NanostoresIcon />;
    case "nodejs":
      return <NodeJsIcon />;
    case "vuelidate":
      return <VuelidateIcon />;
    case "redux":
      return <ReduxIcon />;
    case "pinia":
      return <PiniaIcon />;
    case "vuex":
      return <VuexIcon />;
    case "tanstack-query":
      return <TansactackQueryIcon />;
    case "axios":
      return <AxiosIcon />;
    case "alpine-js":
      return <AlpineJsIcon />;
    case "livewire":
      return <LivewireIcon />;
    case "filamentphp":
      return <FilamentPHPIcon />;
    case "php":
      return <PHPIcon />;
    default:
      return null;
  }
}

export default function PortfolioItem({
  img,
  width,
  height,
  unoptimized,
  altImg,
  project,
  techStacks,
  cardImgClassName,
  children,
}: PortfolioItemProps) {
  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div
        className={`rounded-md shadow-md overflow-hidden ${
          cardImgClassName || ""
        }`}
      >
        <Image
          src={img}
          alt={altImg}
          width={width}
          height={height}
          sizes="(min-width: 1280px) 42vw, (min-width: 768px) 50vw, 100vw"
          unoptimized={unoptimized}
          className="w-full h-auto"
        />
      </div>
      <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="thickness-link"
        >
          {project.title}
        </a>
      </h3>
      <div className="font-medium text-base text-secondary text-justify">
        {children}
      </div>
      {Array.isArray(techStacks) && techStacks.length > 0 ? (
        <div className="mt-5">
          <h4 className="mb-3">Tech Stacks:</h4>
          <div className="flex items-center gap-3 max-w-sm">
            {techStacks.map((techStack, i) => (
              <Fragment key={`${techStack}-${i}`}>
                {renderTechStackIcon(techStack)}
              </Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
