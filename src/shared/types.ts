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
  
  export interface SkillType {
    icon: any;
    title: string;
  }

  export interface ProjectType {
    projectHeader: string;
    projectSubHeader: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
  }