import { Fragment, PropsWithChildren, useMemo } from "react";
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
  altImg: string;
  project: {
    title: string;
    link: string;
  };
  techStacks?: Array<Icons>;
  cardImgClassName?: string;
}

export default function PortfolioItem(props: PortfolioItemProps) {
  const techStackItem = useMemo(() => {
    function icon(techStack: Icons) {
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
        case "bootstrap":
          return <BootstrapIcon />;
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
      }
    }

    if (Array.isArray(props.techStacks) && props.techStacks.length) {
      return props.techStacks.map((techStack, i) => {
        return <Fragment key={`techStack-${i}`}>{icon(techStack)}</Fragment>;
      });
    } else {
      return null;
    }
  }, [props.techStacks]);

  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div
        className={`rounded-md shadow-md overflow-hidden ${
          props?.cardImgClassName || ""
        }`}
      >
        <img src={props.img} alt={props.altImg} className="w-full" />
      </div>
      <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
        <a
          href={props.project.link}
          target="_blank"
          rel="noreferrer"
          className="thickness-link"
        >
          {props.project.title}
        </a>
      </h3>
      <div className="font-medium text-base text-secondary text-justify">
        {props.children}
      </div>
      {Array.isArray(props.techStacks) && props.techStacks.length ? (
        <div className="mt-5">
          <h2 className="mb-3">Tech Stacks:</h2>
          <div className="flex items-center gap-3 max-w-sm">
            {techStackItem}
          </div>
        </div>
      ) : null}
    </div>
  );
}
