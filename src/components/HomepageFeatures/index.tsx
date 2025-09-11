import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const translations = {
  es: {
    features: [
      {
        title: "Fácil de Usar",
        description:
          "Elenix Analytics fue diseñado desde cero para ser fácilmente instalado y usado para poner tu plataforma de análisis en funcionamiento rápidamente.",
      },
      {
        title: "Enfócate en lo que Importa",
        description:
          "Elenix Analytics te permite enfocarte en tus datos y análisis, mientras nosotros nos encargamos de la infraestructura y visualización.",
      },
      {
        title: "Impulsado por React",
        description:
          "Extiende o personaliza tu plataforma de análisis reutilizando React. Elenix puede ser extendido manteniendo la misma interfaz consistente.",
      },
    ],
  },
  en: {
    features: [
      {
        title: "Easy to Use",
        description:
          "Elenix Analytics was designed from the ground up to be easily installed and used to get your analytics platform up and running quickly.",
      },
      {
        title: "Focus on What Matters",
        description:
          "Elenix Analytics lets you focus on your data and analysis, while we handle the infrastructure and visualization.",
      },
      {
        title: "Powered by React",
        description:
          "Extend or customize your analytics platform by reusing React. Elenix can be extended while maintaining the same consistent interface.",
      },
    ],
  },
};

const svgList = [
  require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  require("@site/static/img/undraw_docusaurus_tree.svg").default,
  require("@site/static/img/undraw_docusaurus_react.svg").default,
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const currentTranslations = translations.es;

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {currentTranslations.features.map((feature, idx) => (
            <Feature
              key={idx}
              title={feature.title}
              Svg={svgList[idx]}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
