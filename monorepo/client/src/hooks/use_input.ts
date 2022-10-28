import { ref, Ref } from "vue";

type ReturnType = [Ref<string>, (e: Event) => void];

interface Param {
  init: string;
  validator?: (arg: string) => boolean;
}

export const useInput = ({ init, validator }: Param): ReturnType => {
  const text = ref<string>(init);
  const onChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement;

    if (validator && validator(value) === true) {
      return;
    }

    text.value = value;
  };

  return [text, onChange];
};
