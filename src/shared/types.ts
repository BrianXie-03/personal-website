export enum SelectedPage {
    BrianXie= "brianxie",
    AboutMe = "aboutme",
    Experiences = "experiences",
    Skills = "skills",
    Projects = "projects",
    Contacts= "contacts"
  
  }

  export interface ExperienceType{
    icon: any;
    title: string;
    time: string;
    description: string;
  }