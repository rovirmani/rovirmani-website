export interface Section {
  title: string;
  content?: string;
  subsections?: Section[];
}

export interface Note {
  sections: Section[];
}
