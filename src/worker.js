import { Container, getContainer } from "@cloudflare/containers";

export class MyContainer extends Container {
  defaultPort = 20128;
  sleepAfter = "10m";
  enableInternet = true;
}

export default {
  async fetch(request, env) {
    return getContainer(env.MY_CONTAINER, "auro9router").fetch(request);
  },
};
