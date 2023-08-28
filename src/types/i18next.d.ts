// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import pl from "../translations/pl.json";
import en from "../translations/en.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      pl: typeof pl;
      en: typeof en;
    };
    // other
  }
}
