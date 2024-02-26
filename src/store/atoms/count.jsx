import {atom, selector} from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
  });

export const isEven = selector({
    key: 'isEven',
    get: ({get}) => {
      const num=get(countAtom);
      return num%2;
    }
})
    