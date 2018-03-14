interface NotesOptions {
  text: string;
}

declare module '@storybook/addon-notes' {
  import { IGetStory, IApi } from '@storybook/angular';

  type WithNotesFn = (textOrOptions: string | NotesOptions) => (getStory: IGetStory) => IGetStory;

  export const withMarkdownNotes: WithNotesFn;
  export const withNotes: WithNotesFn;
}
