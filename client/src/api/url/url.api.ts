import { APIFactoryParams } from "../api.types";

export default ({ instance }: APIFactoryParams) => ({
  requestShortenedUrl: (url: string) => instance.post("/posts", { url }),
});
