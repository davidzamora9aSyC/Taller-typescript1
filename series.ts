export class Serie {
    index: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
  
    constructor(index: number, name: string, channel: string, seasons: number, description: string, link:string, image:string) {
        this.index = index;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image= image;
    }
  }