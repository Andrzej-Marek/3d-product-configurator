import { proxy, useSnapshot } from "valtio";

type ItemValue = {
  color: string;
  translate: {
    pl: string;
  };
};
type Items = {
  laces: ItemValue;
  mesh: ItemValue;
  caps: ItemValue;
  inner: ItemValue;
  sole: ItemValue;
  stripes: ItemValue;
  band: ItemValue;
  patch: ItemValue;
};
type ConfigurationStore = {
  current?: keyof Items;
  items: Items;
};
export const configurationStore = proxy<ConfigurationStore>({
  current: "laces",
  items: {
    laces: { color: "#fff", translate: { pl: "Sznurówki" } },
    mesh: { color: "#fff", translate: { pl: "Materiał" } },
    caps: { color: "#fff", translate: { pl: "Czapki" } },
    inner: { color: "#fff", translate: { pl: "Wnętrze" } },
    sole: { color: "#fff", translate: { pl: "Podeszwa" } },
    stripes: { color: "#fff", translate: { pl: "Paski" } },
    band: { color: "#fff", translate: { pl: "Pasek" } },
    patch: { color: "#fff", translate: { pl: "Tylnik" } },
  },
});

export const useConfigurationStore = () => useSnapshot(configurationStore);
