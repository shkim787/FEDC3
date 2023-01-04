import { atomFamily,selectorFamily } from "recoil";
import { request } from "../../utils/fetch";
/*
export const movieDetailState = atomFamily({
  key: "movieDetailState",
  default: (id) => {
    return {
      id,
      movie: {},
    };
  },
});
*/
export const movieDetailState = selectorFamily({
  key: "movieDetailState",
  get:
    (id) =>
    async({ get }) => {
      const res = await request(`i=${id}&plot=full`);

      if (res.Response === "True") {
        const Poster = res.Poster.replace("SX300", "SX700");

        return({ ...res, Poster });
      } else {
        console.log("영화없음");
        return {}
      }
    },
});
