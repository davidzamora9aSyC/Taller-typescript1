export class Serie {
    index: number;
    name: string;
    channel: string;
    seasons: number;
  
    constructor(index: number, name: string, channel: string, seasons: number) {
        this.index = index;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
  }